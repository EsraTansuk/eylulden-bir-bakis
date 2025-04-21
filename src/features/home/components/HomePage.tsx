"use client";

import { Carousel } from "@/components";
import { BlogPage } from "@/features/blog/components/BlogPage";
import { StickySideMenu } from "./stickySideMenu";
import { BottomMenu } from "./bottomMenu/BottomMenu";

export const HomePage = () => {
  // Slider için örnek görseller
  const sliderImages = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&h=600",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&h=600",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1200&h=600",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1200&h=600",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1200&h=600",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1200&h=600",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1200&h=600",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1200&h=600",
  ];

  return (
    <div className="w-full  mx-auto md:p-8">
      {/* Hero Slider */}
      <div className="max-w-7xl mx-auto pb-12">
        <div className="mb-12">
          <Carousel
            images={sliderImages}
            height="h-[400px] md:h-[600px]"
            autoPlayInterval={6000}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-4/6">
            <BlogPage />
          </div>
          <div className="w-full lg:w-2/6">
            <StickySideMenu />
          </div>
        </div>
      </div>
      <BottomMenu />
    </div>
  );
};
