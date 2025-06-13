import React from "react";
import { SocialMedia } from "@/components/socialMedia";
import {
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { StickyMenuTitle } from "../stickyMenuTitle";

interface SocialMediaSideWidgetProps {
  className?: string;
  title?: string;
}

export const SocialMediaSideWidget: React.FC<SocialMediaSideWidgetProps> = ({
  className = "",
  title = "Takip Et",
}) => {
  return (
    <div className={`widget ${className}`}>
      <StickyMenuTitle title={title} />

      <div className="flex flex-row gap-4 mx-12">
        
        <SocialMedia
          href="https://www.instagram.com/"
          icon={<FaInstagram className="text-xl" />}
          iconName="Instagram"
          iconClassName="border-2 text-gray-600 border-gray-400 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors hover:scale-105 duration-300 hover:border-primary w-10 h-10"
          allClassName="w-full"
          target="_blank"
          rel="noopener noreferrer"
        />
       
        <SocialMedia
          href="https://www.youtube.com/"
          icon={<FaYoutube className="text-xl" />}
          iconName="Youtube"
          iconClassName=" border-2 text-gray-600 border-gray-400 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors hover:scale-105 duration-300 hover:border-primary w-10 h-10"
          allClassName="w-full"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialMedia
          href="https://www.tiktok.com/"
          icon={<FaTiktok className="text-xl" />}
          iconName="Tiktok"
          iconClassName=" border-2 text-gray-600 border-gray-400 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors hover:scale-105 duration-300 hover:border-primary w-10 h-10"
          allClassName="w-full"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialMedia
          href="https://www.pinterest.com/"
          icon={<FaPinterest className="text-xl" />}
          iconName="Pinterest"
          iconClassName=" border-2 text-gray-600 border-gray-400 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors hover:scale-105 duration-300 hover:border-primary w-10 h-10"
          allClassName="w-full"
          target="_blank"
          rel="noopener noreferrer"
        />
        
        
        
      </div>
    </div>
  );
};
