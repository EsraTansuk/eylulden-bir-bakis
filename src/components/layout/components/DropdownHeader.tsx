"use client";

import Link from "next/link";
import React, { useRef } from "react";


// Dropdown öğesi için tip tanımı
interface DropdownItem {
  name: string;
  href: string;
}

// Props için tip tanımı
interface DropdownHeaderProps {
  title: string;
  menuKey: string;
  items: DropdownItem[];
  isActive: (path: string) => boolean;
  pathname: string;
}

export const DropdownHeader: React.FC<DropdownHeaderProps> = ({
  title,
  menuKey,
  items,
  isActive,
  pathname,
}) => {
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Dropdown'ın aktif olup olmadığını kontrol eden fonksiyon
  const isDropdownActive = (path: string) => {
    return pathname.startsWith(path);
  };

  return (
    <li
      ref={dropdownRef}
      className={`
        block lg:inline-block py-2 lg:py-0 relative group
      `}
    >
      <button
        className={`
          text-sm tracking-wider font-medium px-4 lg:px-0 uppercase flex items-center
          border-b-2 pb-1 transition-all duration-300 cursor-pointer
          ${
            isDropdownActive(`/${menuKey}`)
              ? "border-primary text-primary"
              : "border-transparent text-dotBgColor group-hover:text-primary group-hover:border-primary transition-[width] duration-300 ease-in-out"
          }
        `}
      >
        {title}
        <svg
          className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
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
        className={`
        lg:absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden
        invisible opacity-0 transform translate-y-[-10px] 
        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 
        transition-all duration-300 py-2
      `}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`
              block px-4 py-2 text-sm relative
              transition-colors duration-200
              ${
                isActive(item.href)
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:text-primary before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 hover:before:w-full"
              }
            `}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </li>
  );
};
