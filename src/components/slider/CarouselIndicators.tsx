"use client";

import React from "react";

interface CarouselIndicatorsProps {
  totalSlides: number;
  currentIndex: number;
  goToSlide: (index: number) => void;
}

export const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({ 
  totalSlides, 
  currentIndex, 
  goToSlide 
}) => {
  return (
    <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-30">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`h-2 rounded-full transition-all duration-300 ${
            index === currentIndex 
              ? "bg-white w-8 shadow-lg" 
              : "bg-white/50 hover:bg-white/80 w-2"
          }`}
          aria-label={`Slayt ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators; 