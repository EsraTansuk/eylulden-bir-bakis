"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { DropdownHeader } from "./DropdownHeader";
import { SideMenu } from "../sideMenu/SideMenu";

export const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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

  return (
    <>
      {/* Sabit header için boşluk */}
      <div className="h-16 lg:h-38"></div>

      {/* Mobil Kenar Menüsü */}
      <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />

      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-40">
        {/* Üst Bar - Logo Alanı */}
        {/* Logo Alanı - Scroll ile kayar */}
        <div
          className={`w-full bg-white border-b border-gray-100 lg:block hidden ${
            isScrolled ? "hidden" : ""
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex justify-center items-center">
            <Link href="/">
              <h1 className="text-3xl lg:text-5xl font-charmonman font-bold text-textColor text-center py-2 hover:text-primaryState-hover transition-colors duration-300 tracking-wide">
                eylülden bir bakış
              </h1>
            </Link>
          </div>
        </div>

        {/* Ana Navigasyon */}
        <nav className="bg-white shadow-sm">
          <div className="flex justify-start ms-4">
            <button
              className="lg:hidden p-4 focus:outline-none"
              onClick={() => setIsSideMenuOpen(true)}
            >
              <div className="space-y-2">
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
                <span className="block w-6 h-0.5 bg-gray-600"></span>
              </div>
            </button>
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
                  <li className="block lg:inline-block py-2 lg:py-0 ">
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

                  {/* Dropdown menüler */}

                  <DropdownHeader
                    title="Raportaj"
                    menuKey="reportage"
                    items={dropdownMenus.reportage}
                    isActive={isActive}
                    pathname={pathname}
                  />

                  <DropdownHeader
                    title="Sokak Hikayeleri"
                    menuKey="streetStory"
                    items={dropdownMenus.streetStory}
                    isActive={isActive}
                    pathname={pathname}
                  />

                  <DropdownHeader
                    title="Doğa ve Hayat"
                    menuKey="natureAndLife"
                    items={dropdownMenus.natureAndLife}
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

                  <li className="block lg:inline-block py-2 lg:py-0 font-bold">
                    <div className="relative">
                      <Link
                        href="/about"
                        className={`
                          text-sm tracking-wider font-bold px-4 lg:px-0 uppercase
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
                  <li className="block lg:inline-block py-2 lg:py-0 ">
                    <div className="relative ">
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
