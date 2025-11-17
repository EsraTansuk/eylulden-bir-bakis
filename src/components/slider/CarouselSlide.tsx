"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CarouselSlideModel } from "./models/CarouselSlideModel";

interface CarouselSlideProps {
  slide: CarouselSlideModel;
  index: number;
  width: string;
  isLast?: boolean;
  isActive: boolean;
}

export const CarouselSlide: React.FC<CarouselSlideProps> = ({ 
  slide, 
  index, 
  width, 
  isLast,
  isActive 
}) => {
  const slideContent = (
    <div 
      className={`h-full shrink-0 relative ${!isLast ? 'mr-1' : ''}`}
      style={{ width }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Image */}
      <div className="relative w-full h-full">
        <Image
          src={slide.image}
          alt={slide.title || `Slayt ${index + 1}`}
          className="object-cover transition-opacity duration-500"
          fill
          priority={index === 0}
        />
      </div>

      {/* Content Overlay */}
      {(slide.title || slide.description || slide.link) && (
        <div className={`absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center px-4 md:px-8 max-w-4xl">
            {slide.title && (
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
            )}
            {slide.description && (
              <p className="text-lg md:text-xl text-white mb-6 drop-shadow-md">
                {slide.description}
              </p>
            )}
            {slide.link && (
              <Link
                href={slide.link}
                className="inline-block bg-primary hover:bg-primaryState-hover text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300 shadow-lg"
              >
                {slide.linkText || "Devamını Oku"}
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );

  return slideContent;
};

export default CarouselSlide; 