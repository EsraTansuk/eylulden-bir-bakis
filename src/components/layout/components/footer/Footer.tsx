import React from "react";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8 mt-12 border-t border-gray-200 relative text-white">
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Social Media Icons */}
        <div className="flex justify-center mb-10">
          <div className="flex space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Site Title with Larger Display */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-charmonman font-bold text-white mb-2">
            eylülden bir bakış
          </h2>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-600 text-center">
          <p className="text-gray-400 text-xs">
            &copy; {currentYear} Eylülden Bir Bakış. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};
