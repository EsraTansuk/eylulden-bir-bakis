"use client";

import React, { useRef, useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SocialMedia } from "@/components/socialMedia";
import {
  FaPinterest,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaTiktok,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import { useGetMenusQuery } from "@/features/menu/api";
import { useGetContactInfoQuery } from "@/features/contact/api/contactApi";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Icon mapping - backend'den gelen icon string'ini React icon component'ine çevirir
const getIconComponent = (iconName: string | undefined) => {
  if (!iconName) {
    return <FaGlobe />;
  }

  const iconMap: Record<string, React.ReactNode> = {
    instagram: <FaInstagram />,
    youtube: <FaYoutube />,
    tiktok: <FaTiktok />,
    pinterest: <FaPinterest />,
    email: <FaEnvelope />,
    facebook: <FaFacebook />,
    twitter: <FaTwitter />,
    linkedin: <FaLinkedin />,
    globe: <FaGlobe />,
  };

  return iconMap[iconName.toLowerCase()] || <FaGlobe />;
};

export const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const { data: menus = [], isLoading: isLoadingMenus } = useGetMenusQuery();
  const { data: contactInfo, isLoading: isLoadingContactInfo } = useGetContactInfoQuery();

  // Açık dropdown kategorilerini izlemek için state
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  // Menüleri menuOrder'a göre sırala
  const sortedMenus = useMemo(() => {
    return menus.slice().sort((a, b) => a.menuOrder - b.menuOrder);
  }, [menus]);

  // Aktif menü öğesini kontrol eden fonksiyon
  const isActive = (path: string) => {
    // Tam eşleşme kontrolü
    if (pathname === path) {
      return true;
    }
    
    // Kategori sayfaları için: /category/[id] formatındaki pathname'leri kontrol et (ID bazlı)
    if (path.startsWith("/category/") && pathname.startsWith("/category/")) {
      const pathCategoryId = path.replace("/category/", "");
      const currentCategoryId = pathname.replace("/category/", "");
      return pathCategoryId === currentCategoryId;
    }
    
    // Slug bazlı kategori sayfaları için
    if (!path.startsWith("/category/") && !path.startsWith("/api") && pathname === path) {
      return true;
    }
    
    // Slug bazlı: /parent/child formatındaki pathname'leri kontrol et
    const pathSegments = path.split("/").filter(Boolean);
    const currentSegments = pathname.split("/").filter(Boolean);
    
    if (pathSegments.length === currentSegments.length && pathSegments.length > 0) {
      return pathSegments.every((segment, index) => segment === currentSegments[index]);
    }
    
    return false;
  };

  // Link'i normalize et (Header'daki gibi)
  const normalizeLink = (link: string) => {
    // Eğer link zaten normalize edilmişse (frontend route formatında) direkt döndür
    if (link.startsWith("/category/")) {
      const slugPath = link.replace("/category/", "");
      return `/${slugPath}`;
    }
    if (link.startsWith("/") && !link.startsWith("/api") && !link.startsWith("/category")) {
      return link;
    }
    
    // /api/articles/category/category-id -> /category-id (ID bazlı, eski format)
    if (link.startsWith("/api/articles/category/")) {
      const categoryId = link.replace("/api/articles/category/", "");
      return `/category/${categoryId}`;
    }
    // /api/categories/parent-slug/child-slug -> /parent-slug/child-slug (root level [...slug] route)
    // /api/categories/slug -> /slug (root level [...slug] route)
    if (link.startsWith("/api/categories/")) {
      const slugPath = link.replace("/api/categories/", "");
      return `/${slugPath}`;
    }
    
    // Eğer link sadece slug ise
    if (!link.startsWith("/") && !link.startsWith("http")) {
      return `/${link}`;
    }
    
    return link;
  };

  // Dropdown menüyü aç/kapat
  const toggleDropdown = (menuId: string) => {
    setOpenCategory(openCategory === menuId ? null : menuId);
  };

  // Dışarıya tıklandığında menüyü kapat
  const handleClickOutside = (e: React.MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/80 z-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleClickOutside}
    >
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-lg transform transition-transform duration-300 overflow-y-auto overflow-x-hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b">
          <div className="flex justify-end items-center">
            <button onClick={onClose} className="p-2 focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <nav className="p-4">
          <div className="flex flex-col justify-center items-center mb-4">
            <Link href="/" className="mx-4">
              <h1 className="text-2xl font-charmonman font-bold text-textColor">
                eylülden bir bakış
              </h1>
            </Link>
            {/* Dekoratif çizgi */}
            <div className="w-full flex justify-center mb-3">
              <div className="w-32 h-px bg-primary"></div>
            </div>
            {/* Paylaşım butonları */}
            <div className="py-3 flex justify-center items-center gap-4">
              {isLoadingContactInfo ? (
                <div className="flex gap-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"
                    />
                  ))}
                </div>
              ) : contactInfo?.socialMediaLinks && contactInfo.socialMediaLinks.length > 0 ? (
                contactInfo.socialMediaLinks.map((link, index) => (
                  <SocialMedia
                    key={index}
                    href={link.url}
                    icon={getIconComponent(link.icon)}
                    iconName={link.icon}
                    iconClassName="text-gray-500 hover:text-primary transition-colors"
                    allClassName="flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                ))
              ) : null}
            </div>
          </div>
          <ul className="space-y-2">
            {/* Ana Sayfa - Sabit menü */}
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 rounded-md ${
                  isActive("/")
                    ? "text-primary font-bold bg-gray-100"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={onClose}
              >
                Ana Sayfa
              </Link>
            </li>

            {/* Backend'den gelen menüler */}
            {isLoadingMenus ? (
              <li>
                <div className="text-sm text-gray-500 py-2 px-3">Yükleniyor...</div>
              </li>
            ) : (
              sortedMenus.map((menu) => {
                const normalizedMenuLink = normalizeLink(menu.link);

                // SubMenus varsa dropdown, yoksa normal link
                if (menu.subMenus && menu.subMenus.length > 0) {
                  const sortedSubMenus = menu.subMenus
                    .slice()
                    .sort((a, b) => a.menuOrder - b.menuOrder);

                  return (
                    <li key={menu._id} className="border-b border-gray-100 py-1">
                      <button
                        onClick={() => toggleDropdown(menu._id)}
                        className="flex justify-between items-center w-full py-2 px-3 rounded-md text-left hover:bg-gray-50"
                      >
                        <span className="text-gray-900 font-medium">{menu.name}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 transform transition-transform ${
                            openCategory === menu._id ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          openCategory === menu._id
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="pl-4 py-2 space-y-1">
                          {sortedSubMenus.map((subMenu) => {
                            const normalizedSubMenuLink = normalizeLink(subMenu.link);
                            return (
                              <li key={subMenu._id}>
                                <Link
                                  href={normalizedSubMenuLink}
                                  className={`block py-1 px-3 rounded hover:text-primary ${
                                    isActive(normalizedSubMenuLink)
                                      ? "text-primary font-medium bg-gray-50"
                                      : "text-gray-600 hover:bg-gray-50"
                                  }`}
                                  onClick={onClose}
                                  target={subMenu.menuTarget}
                                >
                                  {subMenu.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                  );
                } else {
                  return (
                    <li key={menu._id}>
                      <Link
                        href={normalizedMenuLink}
                        target={menu.menuTarget}
                        className={`block py-2 px-3 rounded-md ${
                          isActive(normalizedMenuLink)
                            ? "text-primary font-bold bg-gray-100"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                        onClick={onClose}
                      >
                        {menu.name}
                      </Link>
                    </li>
                  );
                }
              })
            )}

            {/* Hakkımda - Sabit menü */}
            <li>
              <Link
                href="/about-me"
                className={`block py-2 px-3 rounded-md ${
                  isActive("/about-me")
                    ? "text-primary font-bold bg-gray-100"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={onClose}
              >
                Hakkımda
              </Link>
            </li>

            {/* İletişim - Sabit menü */}
            <li>
              <Link
                href="/contact"
                className={`block py-2 px-3 rounded-md hover:text-primary ${
                  isActive("/contact")
                    ? "text-primary font-bold bg-gray-100"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={onClose}
              >
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
