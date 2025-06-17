"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  AboutSideWidget,
  SocialMediaSideWidget,
  InstagramWidget,
  PopularPostsWidget,
} from "./components"

export const StickySideMenu = () => {
  const pathname = usePathname();
  const isAboutPage = pathname === "/about-me";
  const isContactPage = pathname === "/contact";

  return (
    <div className="top-24 left-0 w-full space-y-8 px-8 lg:px-0">
      {!isAboutPage && <AboutSideWidget />}
      <SocialMediaSideWidget />
      {!isContactPage && <PopularPostsWidget />}
      <InstagramWidget />
    </div>
  );
};
