"use client";

import { Carousel, PageContainer, StickySideMenu } from "@/components";
import { ArticleList } from "@/features/article/components/ArticleList";

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
    <>
      {/* Hero Slider */}
      <PageContainer>
        <div className="mb-12">
          <Carousel
            images={sliderImages}
            height="h-[400px] md:h-[600px]"
            autoPlayInterval={6000}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-12 px-6 lg:px-0">
          <div className="w-full lg:w-4/6">
            <ArticleList />
          </div>
          <div className="w-full lg:w-2/6">
            <StickySideMenu />
          </div>
        </div>
      </PageContainer>
      
    </>
  );
};
