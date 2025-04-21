"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SocialMedia } from "@/components/socialMedia";
import {  FaPinterest, FaInstagram,  FaYoutube, FaEnvelope, FaTiktok } from "react-icons/fa";

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
            <Link href="/" className="mx-4">
              <h1 className="text-2xl font-charmonman font-bold text-textColor">
                eylülden bir bakış
              </h1>
            </Link>
            {/* Dekoratif çizgi */}
            <div className="w-full flex justify-center mb-3">
              <div className="w-32 h-[1px] bg-primary"></div>
            </div>
            {/* Paylaşım butonları */}
            <div className="py-3 flex justify-center items-center gap-4">
              

              <SocialMedia
              href="https://www.instagram.com/"
              icon={<FaInstagram />}
              iconName="Instagram"
              iconClassName="text-gray-500 hover:text-primary transition-colors"
              allClassName="flex items-center gap-2"
              />
              
             

              <SocialMedia
              href="https://www.pinterest.com/"
              icon={<FaPinterest />}
              iconName="Pinterest"
              iconClassName="text-gray-500 hover:text-primary transition-colors"
              allClassName="flex items-center gap-2"
              />

              <SocialMedia
              href="https://www.youtube.com/"
              icon={<FaYoutube />}
              iconName="Youtube"
              iconClassName="text-gray-500 hover:text-primary transition-colors"
              allClassName="flex items-center gap-2"
              />

              <SocialMedia
              href="mailto:info@eyluldenbirbakis.com"
              icon={<FaEnvelope />}
              iconName="Email"
              iconClassName="text-gray-500 hover:text-primary transition-colors"
              allClassName="flex items-center gap-2"
              />

              <SocialMedia
              href="https://www.tiktok.com/"
              icon={<FaTiktok />}
              iconName="TikTok"
              iconClassName="text-gray-500 hover:text-primary transition-colors"
              allClassName="flex items-center gap-2"
              />
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
                        className={`block py-1 px-3 rounded hover:text-primary  ${
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
                        className={`block py-1 px-3 rounded hover:text-primary  ${
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
                        className={`block py-1 px-3 rounded hover:text-primary ${
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
                        className={`block py-1 px-3 rounded hover:text-primary ${
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
