"use client";

import React from "react";
import Image from "next/image";

interface CarouselSlideProps {
  image: string;
  index: number;
  width: string;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({ image, index, width }) => {
  return (
    <div 
      className="h-full flex-shrink-0" 
      style={{ width }}
    >
      <div className="relative w-full h-full p-2">
        <Image
          src={image}
          alt={`Slayt ${index + 1}`}
          className="object-cover "
          fill
          priority={index === 0}
        />
      </div>
    </div>
  );
};

export default CarouselSlide; 