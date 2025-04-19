import React from 'react'
import Image from 'next/image'

interface AboutSideWidgetProps {
  className?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
}

export const AboutSideWidget: React.FC<AboutSideWidgetProps> = ({
  className = '',
  title = 'Hakkımda',
  subtitle = 'Merhaba, Ben Eylül',
  description = 'Anılarımı canlı tutmak için çok fotoğraf çekiyorum. Yazmayı, çizmeyi ve fotoğrafçılığı seviyorum.',
  imageSrc = 'https://soledad.pencidesign.net/wp-content/uploads/2015/10/about-me-wid.jpg',
}) => {
  return (
    <div className={`widget ${className}`}>
      <div className=" mb-6">
        <h3 className=" border-1 px-2 py-1 border-l-10 border-l-primary">
          <span className="text-xl font-categoryTitle font-semibold pb-2">{title}</span>
        </h3>
      </div>
      
      <div className="about-widget text-center">
        <div className="relative w-full h-56 mb-4 overflow-hidden rounded">
          <Image 
            src={imageSrc}
            alt={title}
            fill
            className="object-cover rounded"
          />
        </div>
        
        <h2 className="text-xl font-bold font-charmonman mb-3">{subtitle}</h2>
        
        <div className="text-sm text-gray-600 mb-6">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
} 