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

      <div className="grid grid-cols-3 gap-4">
        <SocialMedia
          href="https://www.facebook.com/"
          icon={<FaFacebook className="text-xl" />}
          iconName="Facebook"
          iconClassName="flex items-center justify-center bg-[#3b5999] hover:bg-opacity-90 text-white w-full h-12 rounded transition-colors"
          allClassName="w-full"
          target="_blank"
          rel="noopener noreferrer"
        />

        <SocialMedia
          href="https://www.instagram.com/"
          icon={<FaInstagram className="text-xl" />}
          iconName="Instagram"
          iconClassName="flex items-center justify-center bg-gradient-to-r from-[#f09433] to-[#bc1888] hover:bg-opacity-90 text-white w-full h-12 rounded transition-colors"
          allClassName="w-full"
          target="_blank"
          rel="noopener noreferrer"
        />

        <SocialMedia
          href="https://www.twitter.com/"
          icon={<FaTwitter className="text-xl" />}
          iconName="Twitter"
          iconClassName="flex items-center justify-center bg-[#55acee] hover:bg-opacity-90 text-white w-full h-12 rounded transition-colors"
          allClassName="w-full"
          target="_blank"
          rel="noopener noreferrer"
        />

        <SocialMedia
          href="https://www.pinterest.com/"
          icon={<FaPinterest className="text-xl" />}
          iconName="Pinterest"
          iconClassName="flex items-center justify-center bg-[#cb2027] hover:bg-opacity-90 text-white w-full h-12 rounded transition-colors"
          allClassName="w-full"
          target="_blank"
          rel="noopener noreferrer"
        />

        <SocialMedia
          href="https://www.youtube.com/"
          icon={<FaYoutube className="text-xl" />}
          iconName="Youtube"
          iconClassName="flex items-center justify-center bg-[#ff0000] hover:bg-opacity-90 text-white w-full h-12 rounded transition-colors"
          allClassName="w-full"
          target="_blank"
          rel="noopener noreferrer"
        />

        <SocialMedia
          href="https://www.linkedin.com/"
          icon={<FaLinkedin className="text-xl" />}
          iconName="Linkedin"
          iconClassName="flex items-center justify-center bg-[#0077b5] hover:bg-opacity-90 text-white w-full h-12 rounded transition-colors"
          allClassName="w-full"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  );
};
