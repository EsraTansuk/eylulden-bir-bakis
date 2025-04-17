'use client'

import { Carousel } from "@/components";

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
      
      <h1 className="text-primary text-4xl font-playfair mb-6">Eylülden Bir Bakış</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-light rounded-lg shadow-sm">
          <h2 className="text-accent-primary font-bold text-xl mb-4">Accent Renkleri</h2>
          <div className="flex flex-col gap-2">
            <div className="p-4 bg-accent-primary text-text-white rounded">accent-primary</div>
            <div className="p-4 bg-accent-success text-text-white rounded">accent-success</div>
            <div className="p-4 bg-accent-warning text-text-DEFAULT rounded">accent-warning</div>
          </div>
        </div>
        
        <div className="p-6 bg-light rounded-lg shadow-sm">
          <h2 className="text-secondary font-bold text-xl mb-4">Text Renkleri</h2>
          <div className="flex flex-col gap-2">
            <div className="p-4 bg-white text-textColor rounded">text-textColor</div>
            <div className="p-4 bg-white text-text-light rounded">text-text-light</div>
            <div className="p-4 bg-white text-text-lighter rounded">text-text-lighter</div>
          </div>
        </div>
        
        <div className="p-6 bg-light rounded-lg shadow-sm">
          <h2 className="text-cindoruk font-bold text-xl mb-4">Özel Renkler</h2>
          <div className="flex flex-col gap-2">
            <div className="p-4 bg-cindoruk text-text-white rounded">bg-cindoruk</div>
            <div className="p-4 bg-white text-dotBgColor rounded">text-dotBgColor</div>
            <div className="p-4 bg-dotBgColor text-text-white rounded">bg-dotBgColor</div>
          </div>
        </div>
        
        <div className="p-6 bg-light rounded-lg shadow-sm">
          <h2 className="text-transparent-primary font-bold text-xl mb-4">Diğer Renkler</h2>
          <div className="flex flex-col gap-2">
            <div className="p-4 bg-primary text-text-white rounded">bg-primary</div>
            <div className="p-4 bg-secondary text-text-white rounded">bg-secondary</div>
            <div className="p-4 border border-border-DEFAULT rounded p-4">border-border-DEFAULT</div>
          </div>
        </div>
      </div>
    </div>
  )
}
