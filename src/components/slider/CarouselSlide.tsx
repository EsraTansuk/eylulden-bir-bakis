"use client";

import React from "react";
import Image from "next/image";

interface CarouselSlideProps {
  image: string;
  index: number;
  width: string;
  isLast?: boolean;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({ image, index, width, isLast }) => {
  return (
    <div 
      className={`h-full shrink-0 ${!isLast ? 'mr-1' : ''}`}
      style={{ width }}
    >
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={`Slayt ${index + 1}`}
          className="object-cover"
          fill
          priority={index === 0}
        />
      </div>
    </div>
  );
};

export default CarouselSlide; 