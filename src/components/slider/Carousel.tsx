"use client";

import React, { useState, useEffect, useRef } from "react";
import { CarouselSlide } from "./CarouselSlide";
import { CarouselIndicators } from "./CarouselIndicators";
import { CarouselArrows } from "./CarouselArrows";
import { CarouselSlideModel } from "./models/CarouselSlideModel";

interface CarouselProps {
  slides?: CarouselSlideModel[];
  images?: string[]; // Geriye dönük uyumluluk için
  autoPlayInterval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
  height?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  images,
  autoPlayInterval = 5000,
  showIndicators = true,
  showArrows = true,
  height = "h-[500px] md:h-[700px]",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  // Geriye dönük uyumluluk: images array'i varsa CarouselSlideModel'e dönüştür
  const carouselSlides: CarouselSlideModel[] = slides || (images || []).map(img => ({ image: img }));

  // Otomatik kaydırma için useEffect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isHovered && autoPlayInterval > 0 && carouselSlides.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex >= carouselSlides.length - 1 ? 0 : prevIndex + 1
        );
      }, autoPlayInterval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, autoPlayInterval, carouselSlides.length]);

  // Sonraki slayda geç
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= carouselSlides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Önceki slayda geç
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselSlides.length - 1 : prevIndex - 1
    );
  };

  // Belirli bir slayda geç
  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, carouselSlides.length - 1));
  };

  if (carouselSlides.length === 0) {
    return null;
  }

  return (
    <div 
      className={`relative w-full ${height} overflow-hidden shadow-lg rounded-lg`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={slideRef}
    >
      {/* Slayt Gösterisi - Fade Effect */}
      <div className="relative w-full h-full">
        {carouselSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <CarouselSlide 
              slide={slide}
              index={index}
              width="100%"
              isLast={index === carouselSlides.length - 1}
              isActive={index === currentIndex}
            />
          </div>
        ))}
      </div>

      {/* Göstergeler */}
      {showIndicators && carouselSlides.length > 1 && (
        <CarouselIndicators 
          totalSlides={carouselSlides.length}
          currentIndex={currentIndex}
          goToSlide={goToSlide}
        />
      )}

      {/* Oklar */}
      {showArrows && carouselSlides.length > 1 && (
        <CarouselArrows
          onPrev={prevSlide}
          onNext={nextSlide}
        />
      )}
    </div>
  );
};

export default Carousel; 