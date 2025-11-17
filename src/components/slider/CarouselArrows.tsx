"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselArrowsProps {
  onPrev: () => void;
  onNext: () => void;
}

export const CarouselArrows: React.FC<CarouselArrowsProps> = ({ onPrev, onNext }) => {
  return (
    <>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-lg z-30"
        onClick={onPrev}
        aria-label="Önceki"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-all duration-300 shadow-lg z-30"
        onClick={onNext}
        aria-label="Sonraki"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
      </button>
    </>
  );
};

export default CarouselArrows; 