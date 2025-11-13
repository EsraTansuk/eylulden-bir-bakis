"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import { DropdownHeader } from "./DropdownHeader";
import { SideMenu } from "../sideMenu/SideMenu";
import { useGetMenusQuery } from "@/features/menu/api";

export const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { data: menus = [], isLoading } = useGetMenusQuery();

  // Aktif menü öğesini kontrol eden fonksiyon
  const isActive = (path: string) => {
    return pathname === path;
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menüleri menuOrder'a göre sırala (read-only array'i mutate etmemek için deep copy)
  const sortedMenus = useMemo(() => {
    return menus.slice().sort((a, b) => a.menuOrder - b.menuOrder);
  }, [menus]);

  return (
    <>
      {/* Sabit header için boşluk */}
      <div className="h-16 lg:h-38"></div>

      {/* Mobil Kenar Menüsü */}
      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
      />

      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-40">
        {/* Üst Bar - Logo Alanı */}
        {/* Logo Alanı - Scroll ile kayar */}
        <div
          className={`w-full bg-white border-b border-gray-100 lg:block hidden transition-all duration-300 ${
            isScrolled ? "h-0 overflow-hidden opacity-0 py-0" : "h-auto opacity-100 py-3"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
            <Link href="/">
              <h1 className="text-3xl lg:text-5xl font-charmonman font-bold text-textColor text-center py-2 hover:text-primaryState-hover transition-colors duration-300 tracking-wide">
                eylülden bir bakış
              </h1>
            </Link>
          </div>
        </div>

        {/* Ana Navigasyon */}
        <nav className="bg-white shadow-sm">
          <div className="flex justify-between items-center px-4 lg:px-0">
            <div className="lg:hidden">
              <button
                className="p-4 focus:outline-none"
                onClick={() => setIsSideMenuOpen(true)}
              >
                <div className="space-y-2">
                  <span className="block w-6 h-0.5 bg-gray-600"></span>
                  <span className="block w-6 h-0.5 bg-gray-600"></span>
                  <span className="block w-6 h-0.5 bg-gray-600"></span>
                </div>
              </button>
            </div>
            
            {/* Mobile Logo (Görünür olacak) */}
            <div className="lg:hidden">
              <Link href="/">
                <h1 className="text-2xl font-charmonman font-bold text-textColor text-center hover:text-primaryState-hover transition-colors duration-300 tracking-wide">
                  eylülden bir bakış
                </h1>
              </Link>
            </div>
            
            {/* Sağ taraf doldurma */}
            <div className="lg:hidden w-10"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 hidden justify-center items-center lg:flex">
            <div className="flex justify-between items-center">
              {/* Menü Öğeleri */}
              <div ref={dropdownRef} className="relative w-full lg:w-auto ">
                <ul
                  className={`
                  lg:flex lg:items-center lg:justify-center lg:space-x-8 w-full py-4
                  hidden lg:flex
                  absolute lg:relative left-0 top-full lg:top-auto
                  bg-white lg:bg-transparent
                  shadow-lg lg:shadow-none
                  z-50 justify-center items-center font-categoryTitle 
                `}
                >
                  {/* Anasayfa - Sabit menü */}
                  <li className="block lg:inline-block py-2 lg:py-0">
                    <div className="relative">
                      <Link
                        href="/"
                        className={`
                          text-sm tracking-wider font-bold px-4 lg:px-0 uppercase
                          transition-all duration-300 pb-1 block
                          ${
                            isActive("/")
                              ? "text-primary nav-item active"
                              : "text-gray-700 hover:text-primary nav-item"
                          }
                        `}
                      >
                        Ana Sayfa
                      </Link>
                    </div>
                  </li>

                  {/* Backend'den gelen menüler */}
                  {isLoading ? (
                    <li className="block lg:inline-block py-2 lg:py-0">
                      <div className="text-sm text-gray-500">Yükleniyor...</div>
                    </li>
                  ) : (
                    sortedMenus.map((menu) => {
                      // SubMenus varsa dropdown, yoksa normal link
                      if (menu.subMenus && menu.subMenus.length > 0) {
                        const subMenuItems = menu.subMenus
                          .slice()
                          .sort((a, b) => a.menuOrder - b.menuOrder)
                          .map((subMenu) => ({
                            name: subMenu.name,
                            href: subMenu.link,
                          }));

                        // Link'ten menuKey çıkar (örn: /reportage -> reportage)
                        const menuKey = menu.link.replace(/^\//, "").split("/")[0] || menu._id;

                        return (
                          <DropdownHeader
                            key={menu._id}
                            title={menu.name}
                            menuKey={menuKey}
                            items={subMenuItems}
                            isActive={isActive}
                            pathname={pathname}
                          />
                        );
                      } else {
                        return (
                          <li key={menu._id} className="block lg:inline-block py-2 lg:py-0">
                            <div className="relative">
                              <Link
                                href={menu.link}
                                target={menu.menuTarget}
                                className={`
                                  text-sm tracking-wider font-bold px-4 lg:px-0 uppercase
                                  transition-all duration-300 pb-1 block
                                  ${
                                    isActive(menu.link)
                                      ? "text-primary nav-item active"
                                      : "text-gray-700 hover:text-primary nav-item"
                                  }
                                `}
                              >
                                {menu.name}
                              </Link>
                            </div>
                          </li>
                        );
                      }
                    })
                  )}

                  {/* Hakkımda - Sabit menü */}
                  <li className="block lg:inline-block py-2 lg:py-0">
                    <div className="relative">
                      <Link
                        href="/about-me"
                        className={`
                          text-sm tracking-wider font-bold px-4 lg:px-0 uppercase
                          transition-all duration-300 pb-1 block
                          ${
                            isActive("/about-me")
                              ? "text-primary nav-item active"
                              : "text-gray-700 hover:text-primary nav-item"
                          }
                        `}
                      >
                        Hakkımda
                      </Link>
                    </div>
                  </li>

                  {/* İletişim - Sabit menü */}
                  <li className="block lg:inline-block py-2 lg:py-0">
                    <div className="relative">
                      <Link
                        href="/contact"
                        className={`
                          text-sm tracking-wider font-bold px-4 lg:px-0 uppercase
                          transition-all duration-300 pb-1 block
                          ${
                            isActive("/contact")
                              ? "text-primary nav-item active"
                              : "text-gray-700 hover:text-primary nav-item"
                          }
                        `}
                      >
                        İletişim
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
