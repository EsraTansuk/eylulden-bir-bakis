"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-5 h-5 fill-current"
  >
    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-5 h-5 fill-current"
  >
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
  </svg>
);

const PinterestIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 512"
    className="w-5 h-5 fill-current"
  >
    <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-5 h-5 fill-current"
  >
    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
  </svg>
);

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Açık dropdown kategorilerini izlemek için state
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  // Aktif menü öğesini kontrol eden fonksiyon
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Dropdown menü içerikleri
  const dropdownMenus = {
    reportage: [
      { name: "Gençler", href: "/reportage/youth" },
      { name: "Kadınlar", href: "/reportage/women" },
      { name: "Emekçiler", href: "/reportage/workers" },
      { name: "Yaratıcılar", href: "/reportage/creators" },
      { name: "Kurumsal", href: "/reportage/corporate" },
    ],
    streetStory: [
      { name: "Mahalle Hayatları", href: "/street-story/neighborhood-life" },
      { name: "Sokak ve Mekanlar", href: "/street-story/streets-and-places" },
      {
        name: "Kültür ve Etkinlikler",
        href: "/street-story/culture-and-events",
      },
      { name: "Küçük Keşifler", href: "/street-story/small-discoveries" },
    ],
    natureAndLife: [
      { name: "Doğa ve Hayat", href: "/nature-and-life/nature-and-life" },
      {
        name: "Toprak ve Üretim",
        href: "/nature-and-life/soil-and-production",
      },
      { name: "Sürdürülebilirlik", href: "/nature-and-life/sustainability" },
      { name: "Hayvanlar", href: "/nature-and-life/animals" },
    ],
    memories: [
      { name: "Yolculuk Anıları", href: "/travel-memories" },
      { name: "Anlatılar", href: "/stories" },
      { name: "Fotoğraflar", href: "/photos" },
    ],
  };

  // Dropdown menüyü aç/kapat
  const toggleDropdown = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
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
            <Link href="/" className="mb-4">
              <h1 className="text-2xl font-charmonman font-bold text-textColor">
                eylülden bir bakış
              </h1>
            </Link>
            {/* Dekoratif çizgi */}
            <div className="w-full flex justify-center mb-3">
              <div className="w-32 h-[1px] bg-primary"></div>
            </div>
            {/* Paylaşım butonları */}
            <div className="py-3">
              <div className="flex gap-6 justify-center items-center">
                {/* Sosyal medya paylaşım butonları */}
                <Link
                  href={`https://www.facebook.com/`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-gray-500 hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                  <span className="sr-only">Facebook</span>
                </Link>

                <Link
                  href={`https://twitter.com/`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-gray-500 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                  <span className="sr-only">Twitter</span>
                </Link>

                <Link
                  href={`https://pinterest.com/`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-gray-500 hover:text-primary transition-colors"
                  aria-label="Pinterest"
                >
                  <PinterestIcon />
                  <span className="sr-only">Pinterest</span>
                </Link>

                <Link
                  href={`mailto:`}
                  className="flex items-center text-gray-500 hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <EmailIcon />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
          </div>
          <ul className="space-y-2">
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

            {/* Raportaj Dropdown */}
            <li className="border-b border-gray-100 py-1">
              <button
                onClick={() => toggleDropdown("reportage")}
                className="flex justify-between items-center w-full py-2 px-3 rounded-md text-left hover:bg-gray-50"
              >
                <span className="text-gray-900 font-medium">Raportaj</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transform transition-transform ${
                    openCategory === "reportage" ? "rotate-180" : ""
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
                  openCategory === "reportage"
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="pl-4 py-2 space-y-1">
                  {dropdownMenus.reportage.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block py-1 px-3 rounded ${
                          isActive(item.href)
                            ? "text-primary font-medium bg-gray-50"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                        onClick={onClose}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Sokak Hikayeleri Dropdown */}
            <li className="border-b border-gray-100 py-1">
              <button
                onClick={() => toggleDropdown("streetStory")}
                className="flex justify-between items-center w-full py-2 px-3 rounded-md text-left hover:bg-gray-50"
              >
                <span className="text-gray-900 font-medium">
                  Sokak Hikayeleri
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transform transition-transform ${
                    openCategory === "streetStory" ? "rotate-180" : ""
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
                  openCategory === "streetStory"
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="pl-4 py-2 space-y-1">
                  {dropdownMenus.streetStory.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block py-1 px-3 rounded ${
                          isActive(item.href)
                            ? "text-primary font-medium bg-gray-50"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                        onClick={onClose}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Doğa ve Hayat Dropdown */}
            <li className="border-b border-gray-100 py-1">
              <button
                onClick={() => toggleDropdown("natureAndLife")}
                className="flex justify-between items-center w-full py-2 px-3 rounded-md text-left hover:bg-gray-50"
              >
                <span className="text-gray-900 font-medium">Doğa ve Hayat</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transform transition-transform ${
                    openCategory === "natureAndLife" ? "rotate-180" : ""
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
                  openCategory === "natureAndLife"
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="pl-4 py-2 space-y-1">
                  {dropdownMenus.natureAndLife.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block py-1 px-3 rounded ${
                          isActive(item.href)
                            ? "text-primary font-medium bg-gray-50"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                        onClick={onClose}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Anılar Dropdown */}
            <li className="border-b border-gray-100 py-1">
              <button
                onClick={() => toggleDropdown("memories")}
                className="flex justify-between items-center w-full py-2 px-3 rounded-md text-left hover:bg-gray-50"
              >
                <span className="text-gray-900 font-medium">Anılar</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transform transition-transform ${
                    openCategory === "memories" ? "rotate-180" : ""
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
                  openCategory === "memories"
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="pl-4 py-2 space-y-1">
                  {dropdownMenus.memories.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`block py-1 px-3 rounded ${
                          isActive(item.href)
                            ? "text-primary font-medium bg-gray-50"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                        onClick={onClose}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link
                href="/about"
                className={`block py-2 px-3 rounded-md ${
                  isActive("/about")
                    ? "text-primary font-bold bg-gray-100"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={onClose}
              >
                Hakkımda
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={`block py-2 px-3 rounded-md ${
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
