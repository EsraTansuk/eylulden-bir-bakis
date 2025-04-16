"use client";

import React, { useState, useEffect, useRef } from "react";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselIndicators } from "./CarouselIndicators";
import { CarouselArrows } from "./CarouselArrows";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
  height?: string;
  slidesPerView?: number;
}

export const Carousel: React.FC<CarouselProps> = ({
  images,
  autoPlayInterval = 5000,
  showIndicators = true,
  showArrows = true,
  height = "h-[500px]",
  slidesPerView: initialSlidesPerView = 2,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  
  // Medium ekran boyutu kontrolü (1024px üzeri md kabul ediliyor)
  const isMediumScreen = useMediaQuery("(min-width: 1024px)");
  
  // Ekran boyutuna göre gösterilecek slayt sayısını belirle
  const slidesPerView = isMediumScreen ? initialSlidesPerView : 1;

  // Otomatik kaydırma için useEffect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isHovered && autoPlayInterval > 0) {
      interval = setInterval(() => {
        const maxIndex = Math.max(0, images.length - slidesPerView);
        setCurrentIndex((prevIndex) => 
          prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
      }, autoPlayInterval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, autoPlayInterval, images.length, slidesPerView]);

  // Ekran boyutu değiştiğinde currentIndex'i ayarla
  useEffect(() => {
    const maxIndex = Math.max(0, images.length - slidesPerView);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [slidesPerView, images.length, currentIndex]);

  // Sonraki slayda geç
  const nextSlide = () => {
    const maxIndex = Math.max(0, images.length - slidesPerView);
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  // Önceki slayda geç
  const prevSlide = () => {
    const maxIndex = Math.max(0, images.length - slidesPerView);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  // Belirli bir slayda geç
  const goToSlide = (index: number) => {
    const maxIndex = Math.max(0, images.length - slidesPerView);
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Kaç adet gösterge olacağını hesapla
  const totalSlides = Math.max(1, images.length - slidesPerView + 1);
  
  // Her bir slayt için genişlik hesapla
  const slideWidth = `${100 / slidesPerView}%`;

  return (
    <div 
      className={`relative w-full ${height} overflow-hidden rounded-xl shadow-md`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={slideRef}
    >
      {/* Slayt Gösterisi */}
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)` }}
      >
        {images.map((image, index) => (
          <CarouselSlide 
            key={index}
            image={image}
            index={index}
            width={slideWidth}
          />
        ))}
      </div>

      {/* Göstergeler */}
      {showIndicators && (
        <CarouselIndicators 
          totalSlides={totalSlides}
          currentIndex={currentIndex}
          goToSlide={goToSlide}
        />
      )}

      {/* Oklar */}
      {showArrows && images.length > slidesPerView && (
        <CarouselArrows
          onPrev={prevSlide}
          onNext={nextSlide}
        />
      )}
    </div>
  );
};

export default Carousel; 