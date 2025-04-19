import { SocialMedia } from "@/components/socialMedia";
import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaEnvelope,
  FaTiktok,
} from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="pt-16 pb-8 mt-12 border-t border-gray-200 relative text-white"
      style={{
        backgroundImage:
          'url("https://soledad.pencidesign.net/wp-content/uploads/2017/06/mountain.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Social Media Icons */}
        <div className="flex justify-center mb-10">
          <div className="py-3 flex justify-center items-center gap-6 text-2xl">
            <SocialMedia
              href="https://www.instagram.com/"
              icon={<FaInstagram />}
              iconName="Instagram"
              iconClassName="text-white hover:text-primary transition-colors"
              allClassName="flex items-center gap-2"
            />

            <SocialMedia
              href="https://www.pinterest.com/"
              icon={<FaPinterest />}
              iconName="Pinterest"
              iconClassName="text-white hover:text-primary transition-colors"
              allClassName="flex items-center gap-2"
            />

            <SocialMedia
              href="https://www.youtube.com/"
              icon={<FaYoutube />}
              iconName="Youtube"
              iconClassName="text-white hover:text-primary transition-colors"
              allClassName="flex items-center gap-2"
            />

            <SocialMedia
              href="mailto:info@eyluldenbirbakis.com"
              icon={<FaEnvelope />}
              iconName="Email"
              iconClassName="text-white hover:text-primary transition-colors"
              allClassName="flex items-center gap-2"
            />

            <SocialMedia
              href="https://www.tiktok.com/"
              icon={<FaTiktok />}
              iconName="TikTok"
              iconClassName="text-white hover:text-primary transition-colors"
              allClassName="flex items-center gap-2"
            />
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
