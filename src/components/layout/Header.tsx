"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { DropdownHeader } from "./components/DropdownHeader";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Aktif menü öğesini kontrol eden fonksiyon
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Dropdown menü içerikleri
  const dropdownMenus = {
    lifestyle: [
      { name: "Moda", href: "/lifestyle/fashion" },
      { name: "Dekorasyon", href: "/lifestyle/decoration" },
      { name: "Sağlıklı Yaşam", href: "/lifestyle/wellness" },
      { name: "Mutfak", href: "/lifestyle/kitchen" },
    ],
    travel: [
      { name: "Destinasyonlar", href: "/travel/destinations" },
      { name: "Seyahat Rehberi", href: "/travel/guides" },
      { name: "Gezi Notları", href: "/travel/notes" },
    ],
    photography: [
      { name: "Portreler", href: "/photography/portraits" },
      { name: "Manzara", href: "/photography/landscape" },
      { name: "Sokak", href: "/photography/street" },
    ],
    memories: [
      { name: "Günlükler", href: "/memories/diaries" },
      { name: "Anılar", href: "/memories/stories" },
      { name: "Koleksiyonlar", href: "/memories/collections" },
    ],
  };

  return (
    <>
      {/* Sabit header için boşluk */}
      <div className="h-32 lg:h-40"></div>

      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        {/* Üst Bar - Logo Alanı */}
        

        {/* Ana Navigasyon */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
            <div className="flex justify-between items-center">
              {/* Mobil Menü Butonu */}
              <button
                className="lg:hidden p-4 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="space-y-2">
                  <span className="block w-6 h-0.5 bg-gray-600"></span>
                  <span className="block w-6 h-0.5 bg-gray-600"></span>
                  <span className="block w-6 h-0.5 bg-gray-600"></span>
                </div>
              </button>

              {/* Menü Öğeleri */}
              <div ref={dropdownRef} className="relative w-full lg:w-auto">
                <ul
                  className={`
                  lg:flex lg:items-center lg:justify-center lg:space-x-8 w-full py-4
                  ${isMenuOpen ? "block" : "hidden lg:flex"}
                  absolute lg:relative left-0 top-full lg:top-auto
                  bg-white lg:bg-transparent
                  shadow-lg lg:shadow-none
                  z-50 justify-center items-center
                `}
                >
                  <li className="block lg:inline-block py-2 lg:py-0">
                    <div className="relative">
                      <Link
                        href="/"
                        className={`
                          text-sm tracking-wider font-medium px-4 lg:px-0 uppercase
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

                  {/* Dropdown menüler */}

                  <DropdownHeader
                    title="Yaşam"
                    menuKey="lifestyle"
                    items={dropdownMenus.lifestyle}
                    isActive={isActive}
                    pathname={pathname}
                  />

                  <DropdownHeader
                    title="Seyahat"
                    menuKey="travel"
                    items={dropdownMenus.travel}
                    isActive={isActive}
                    pathname={pathname}
                  />

                  <DropdownHeader
                    title="Fotoğraf"
                    menuKey="photography"
                    items={dropdownMenus.photography}
                    isActive={isActive}
                    pathname={pathname}
                  />

                  <DropdownHeader
                    title="Anılar"
                    menuKey="memories"
                    items={dropdownMenus.memories}
                    isActive={isActive}
                    pathname={pathname}
                  />

                  <li className="block lg:inline-block py-2 lg:py-0">
                    <div className="relative">
                      <Link
                        href="/about"
                        className={`
                          text-sm tracking-wider font-medium px-4 lg:px-0 uppercase
                          transition-all duration-300 pb-1 block
                          ${
                            isActive("/about")
                              ? "text-primary nav-item active"
                              : "text-gray-700 hover:text-primary nav-item"
                          }
                        `}
                      >
                        Hakkımda
                      </Link>
                    </div>
                  </li>
                  <li className="block lg:inline-block py-2 lg:py-0">
                    <div className="relative">
                      <Link
                        href="/contact"
                        className={`
                          text-sm tracking-wider font-medium px-4 lg:px-0 uppercase
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
