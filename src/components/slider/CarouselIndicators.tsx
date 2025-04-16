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
    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-3 h-3 rounded-full transition-all ${
            index === currentIndex 
              ? "bg-primary w-6" 
              : "bg-white/50 hover:bg-white/80"
          }`}
          aria-label={`Slayt Grubu ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators; 