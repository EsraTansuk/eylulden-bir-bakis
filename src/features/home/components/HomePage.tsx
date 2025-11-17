"use client";

import { ArticleCarousel, PageContent, StickySideMenu } from "@/components";
import { ArticleList } from "@/features/article/components/ArticleList";
import { useGetArticlesQuery } from "@/features/article/api/articleApi";

export const HomePage = () => {
  // Carousel için makaleleri çek (ilk 6 makale)
  const { data: carouselData, isLoading: isLoadingCarousel } = useGetArticlesQuery(
    { status: "published", limit: 6 },
    { skip: false }
  );

  const carouselArticles = carouselData?.articles || [];

  return (
    <>
      {/* Hero Slider - Makale Carousel */}
      <PageContent>
        <div className="mb-12">
          {isLoadingCarousel ? (
            <div className="w-full h-[500px] md:h-[600px] bg-gray-200 animate-pulse rounded-lg"></div>
          ) : carouselArticles.length > 0 ? (
            <ArticleCarousel
              articles={carouselArticles}
              height="h-[300px] md:h-[400px]"
              autoPlayInterval={6000}
            />
          ) : null}
        </div>
        <div className="flex flex-col lg:flex-row gap-12 px-6 lg:px-0">
          <div className="w-full lg:w-4/6">
            <ArticleList />
          </div>
          <div className="w-full lg:w-2/6">
            <StickySideMenu />
          </div>
        </div>
      </PageContent>
      
    </>
  );
};
