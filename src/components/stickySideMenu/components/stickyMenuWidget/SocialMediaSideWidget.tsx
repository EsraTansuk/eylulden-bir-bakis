"use client";

import React from "react";
import { SocialMedia } from "@/components/socialMedia";
import {
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaYoutube,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";
import { StickyMenuTitle } from "../stickyMenuTitle";
import { useGetContactInfoQuery } from "@/features/contact/api/contactApi";

interface SocialMediaSideWidgetProps {
  className?: string;
  title?: string;
}

// Icon mapping - backend'den gelen icon string'ini React icon component'ine çevirir
const getIconComponent = (iconName: string | undefined) => {
  if (!iconName) {
    return <FaGlobe className="text-xl" />;
  }

  const iconMap: Record<string, React.ReactNode> = {
    instagram: <FaInstagram className="text-xl" />,
    youtube: <FaYoutube className="text-xl" />,
    tiktok: <FaTiktok className="text-xl" />,
    pinterest: <FaPinterest className="text-xl" />,
    email: <FaEnvelope className="text-xl" />,
    facebook: <FaFacebook className="text-xl" />,
    twitter: <FaTwitter className="text-xl" />,
    linkedin: <FaLinkedin className="text-xl" />,
    globe: <FaGlobe className="text-xl" />,
  };

  return iconMap[iconName.toLowerCase()] || <FaGlobe className="text-xl" />;
};

export const SocialMediaSideWidget: React.FC<SocialMediaSideWidgetProps> = ({
  className = "",
  title = "Takip Et",
}) => {
  const { data: contactInfo, isLoading } = useGetContactInfoQuery();

  return (
    <div className={`widget ${className}`}>
      <StickyMenuTitle title={title} />

      <div className="flex flex-row gap-4 mx-12">
        {isLoading ? (
          <div className="flex gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"
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
              iconClassName="border-2 text-gray-600 border-gray-400 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors hover:scale-105 duration-300 hover:border-primary w-10 h-10"
              allClassName="w-full"
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
  );
};
