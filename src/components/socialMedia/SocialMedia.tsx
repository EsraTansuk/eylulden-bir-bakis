import Link from "next/link";
import React from "react";

interface SocialMediaProps {
  className?: string;
  href: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  icon: React.ReactNode;
  iconName?: string;
  iconClassName?: string;
  allClassName?: string;
  email?: string;
}

export const SocialMedia: React.FC<SocialMediaProps> = ({
  href,
  target,
  rel,
  ariaLabel,
  icon,
  iconName,
  iconClassName,
  allClassName,
  email,
}) => {
  return (
    <div className={allClassName}>
      {/* Sosyal medya paylaşım butonları */}
      <Link
        href={email ? `mailto:${email}` : href}
        target={target}
        rel={rel}
        className={iconClassName}
        aria-label={ariaLabel}

      >
        {icon}
        <span className="sr-only">{iconName}</span>
      </Link>
    </div>
  );
};
