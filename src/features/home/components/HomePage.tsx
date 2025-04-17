'use client'

import { Carousel } from "@/components";
import { BlogPage } from "@/features/blog/components/BlogPage";

export const HomePage = () => {
  // Slider için örnek görseller
  const sliderImages = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1200&h=600",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1200&h=600",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1200&h=600",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1200&h=600",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1200&h=600",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1200&h=600",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1200&h=600",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=1200&h=600",
    
  ];

  return (
    <div className="w-full max-w-7xl mx-auto md:p-8">
      {/* Hero Slider */}
      <div className="mb-12">
        <Carousel 
          images={sliderImages}
          height="h-[400px] md:h-[600px]" 
          autoPlayInterval={6000}
          
        />
      </div>
      
      <BlogPage />
    </div>
  )
}
