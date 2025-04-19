import React from "react";
import { SocialMedia } from "@/components/socialMedia";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

interface SocialMediaSideWidgetProps {
  className?: string;
  title?: string;
}

export const SocialMediaSideWidget: React.FC<SocialMediaSideWidgetProps> = ({
  className = "",
  title = "TAKİP ET",
}) => {
  return (
    <div className={`widget  ${className}`}>
      <div className=" mb-6">
        <h3 className=" border-1 px-2 py-1 border-l-10 border-l-primary">
          <span className="text-xl font-categoryTitle font-semibold pb-2">
            {title}
          </span>
        </h3>
      </div>

      <div className="flex flex-row gap-4 mx-12">
        <SocialMedia
          href="https://www.facebook.com/"
          icon={<FaFacebook className="text-xl" />}
          iconName="Facebook"
          iconClassName=" border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors hover:scale-105 duration-300 hover:border-primary w-12 h-12"
          allClassName="w-full"
          target="_blank"
          rel="noopener noreferrer"
        />

        <SocialMedia
          href="https://www.instagram.com/"
          icon={<FaInstagram className="text-xl" />}
          iconName="Instagram"
          iconClassName=" border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors hover:scale-105 duration-300 hover:border-primary w-12 h-12"
          allClassName="w-full"
          target="_blank"
          rel="noopener noreferrer"
        />

   

        <SocialMedia
          href="https://www.pinterest.com/"
          icon={<FaPinterest className="text-xl" />}
          iconName="Pinterest"
          iconClassName=" border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors hover:scale-105 duration-300 hover:border-primary w-12 h-12"
          allClassName="w-full"
          target="_blank"
          rel="noopener noreferrer"
        />

        <SocialMedia
          href="https://www.youtube.com/"
          icon={<FaYoutube className="text-xl" />}
          iconName="Youtube"
          iconClassName=" border-2 border-gray-400 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors hover:scale-105 duration-300 hover:border-primary w-12 h-12"
          allClassName="w-full"
          target="_blank"
          rel="noopener noreferrer"
        />

      </div>
    </div>
  );
};
