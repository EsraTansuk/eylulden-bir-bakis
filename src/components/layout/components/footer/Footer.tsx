"use client";

import { SocialMedia } from "@/components/socialMedia";
import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaEnvelope,
  FaTiktok,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import { useGetContactInfoQuery } from "@/features/contact/api/contactApi";

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

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { data: contactInfo, isLoading } = useGetContactInfoQuery();

  return (
    <footer
      className="pt-16 pb-8 border-t border-gray-200 relative text-white"
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
            {isLoading ? (
              // Loading skeleton
              <div className="flex gap-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-600 animate-pulse"
                  />
                ))}
              </div>
            ) : contactInfo?.socialMediaLinks && contactInfo.socialMediaLinks.length > 0 ? (
              // Backend'den gelen sosyal medya linkleri
              contactInfo.socialMediaLinks.map((link, index) => (
                <SocialMedia
                  key={index}
                  href={link.url}
                  icon={getIconComponent(link.icon)}
                  iconName={link.icon}
                  iconClassName="text-white hover:text-primary transition-colors"
                  allClassName="flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ))
            ) : (
              // Fallback: Eğer API'den veri gelmezse boş göster
              null
            )}
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
