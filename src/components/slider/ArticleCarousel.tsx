"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CarouselIndicators } from "./CarouselIndicators";
import { CarouselArrows } from "./CarouselArrows";
import { ArticleModel } from "@/features/article/models/ArticleModel";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface ArticleCarouselProps {
  articles: ArticleModel[];
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
  height?: string;
}

export const ArticleCarousel: React.FC<ArticleCarouselProps> = ({
  articles,
  autoPlayInterval = 5000,
  showIndicators = true,
  showArrows = true,
  height = "h-[500px] md:h-[600px]",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  
  // Medium ekran boyutu kontrolü (1024px üzeri lg kabul ediliyor)
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  
  // Ekran boyutuna göre gösterilecek slayt sayısını belirle (2'li görüntü için)
  const slidesPerView = isLargeScreen ? 2 : 1;

  // Otomatik kaydırma için useEffect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isHovered && autoPlayInterval > 0 && articles.length > slidesPerView) {
      interval = setInterval(() => {
        const maxIndex = Math.max(0, articles.length - slidesPerView);
        setCurrentIndex((prevIndex) => 
          prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
      }, autoPlayInterval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, autoPlayInterval, articles.length, slidesPerView]);

  // Ekran boyutu değiştiğinde currentIndex'i ayarla
  useEffect(() => {
    const maxIndex = Math.max(0, articles.length - slidesPerView);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [slidesPerView, articles.length, currentIndex]);

  // Sonraki slayda geç
  const nextSlide = () => {
    const maxIndex = Math.max(0, articles.length - slidesPerView);
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  // Önceki slayda geç
  const prevSlide = () => {
    const maxIndex = Math.max(0, articles.length - slidesPerView);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  // Belirli bir slayda geç
  const goToSlide = (index: number) => {
    const maxIndex = Math.max(0, articles.length - slidesPerView);
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Tarih formatlama
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Kaç adet gösterge olacağını hesapla
  const totalSlides = Math.max(1, Math.ceil(articles.length / slidesPerView));

  if (articles.length === 0) {
    return null;
  }

  return (
    <div 
      className={`relative w-full ${height} overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={slideRef}
    >
      {/* Slayt Gösterisi */}
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ 
          gap: slidesPerView === 2 ? '1rem' : '0',
          transform: slidesPerView === 2
            ? `translateX(calc(-${currentIndex} * (50% + 0.5rem)))`
            : `translateX(-${currentIndex * 100}%)`
        }}
      >
        {articles.map((article, index) => {
          // Her slide için genişlik hesapla (gap için alan bırak)
          const slideWidth = slidesPerView === 2 
            ? 'calc(50% - 0.5rem)'
            : '100%';
          
          return (
            <div
              key={article._id}
              className="h-full shrink-0 relative overflow-hidden"
              style={{ width: slideWidth }}
            >
              <Link href={`/article/${article.slug}`} className="block h-full">
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10"></div>
                
                {/* Image */}
                <div className="relative w-full h-full">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      className="object-cover"
                      fill
                      priority={index < 2}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500">Resim Yok</span>
                    </div>
                  )}
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8">
                  {/* Kategori */}
                  {article.category && (
                    <div className="mb-1">
                      <span className="text-[10px] md:text-xs font-bold uppercase text-primary">
                        {article.category.parentCategory 
                          ? `${article.category.parentCategory.name} / ${article.category.name}`
                          : article.category.name}
                      </span>
                    </div>
                  )}
                  
                  {/* Başlık */}
                  <h2 className="text-[14px] md:text-lg lg:text-xl  text-white mb-1 drop-shadow-lg line-clamp-2">
                    {article.title}
                  </h2>

                  {/* Meta Bilgiler (Tarih ve Yorum) */}
                  <div className="flex items-center gap-4 text-sm md:text-base text-white/90">
                    <span className="flex items-center text-[10px] md:text-sm gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(article.createdAt)}
                    </span>
                    <span className="flex items-center text-[10px] md:text-sm gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      {article.commentCount || 0} Yorum
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Göstergeler */}
      {showIndicators && articles.length > slidesPerView && (
        <CarouselIndicators 
          totalSlides={totalSlides}
          currentIndex={currentIndex}
          goToSlide={goToSlide}
        />
      )}

      {/* Oklar */}
      {showArrows && articles.length > slidesPerView && (
        <CarouselArrows
          onPrev={prevSlide}
          onNext={nextSlide}
        />
      )}
    </div>
  );
};

export default ArticleCarousel;

