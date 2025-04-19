import React from "react";
import { SocialMedia } from "@/components/socialMedia";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

interface AboutSideWidgetProps {
  className?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
}

export const AboutSideWidget: React.FC<AboutSideWidgetProps> = ({
  className = "",
  title = "HAKKIMDA",
  subtitle = "Merhaba, Ben Eylül",
  description = "Anılarımı canlı tutmak için çok fotoğraf çekiyorum. Yazmayı, çizmeyi ve fotoğrafçılığı seviyorum.",
  imageSrc = "https://soledad.pencidesign.net/wp-content/uploads/2015/10/about-me-wid.jpg",
}) => {
  return (
    <div className={`widget about-widget ${className}`}>
      <div className="penci-border-arrow mb-6">
        <h3 className="border-1 px-2 py-1 border-l-10 border-l-primary">
          <span className="text-xl font-categoryTitle font-semibold pb-2">
            {title}
          </span>
        </h3>
      </div>

      <div className="about-widget text-center">
        <div className="relative w-full h-56 mb-4 overflow-hidden rounded">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover rounded"
          />
        </div>

        <h2 className="text-xl font-bold font-charmonman mb-3">{subtitle}</h2>

        <div className="text-sm text-gray-600 mb-6">
          <p>{description}</p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <SocialMedia
            href="https://www.facebook.com/"
            icon={<FaFacebook />}
            iconName="Facebook"
            iconClassName="text-gray-500 hover:text-primary transition-colors"
            allClassName="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          />

          <SocialMedia
            href="https://www.instagram.com/"
            icon={<FaInstagram />}
            iconName="Instagram"
            iconClassName="text-gray-500 hover:text-primary transition-colors"
            allClassName="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          />

          <SocialMedia
            href="https://www.twitter.com/"
            icon={<FaTwitter />}
            iconName="Twitter"
            iconClassName="text-gray-500 hover:text-primary transition-colors"
            allClassName="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          />

          <SocialMedia
            href="https://www.pinterest.com/"
            icon={<FaPinterest />}
            iconName="Pinterest"
            iconClassName="text-gray-500 hover:text-primary transition-colors"
            allClassName="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </div>
  );
};
