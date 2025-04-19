import React from "react";
import Image from "next/image";

interface InstagramWidgetProps {
  className?: string;
  title?: string;
}

export const InstagramWidget: React.FC<InstagramWidgetProps> = ({
  className = "",
  title = "Instagram",
}) => {
  // Instagram fotoğrafları
  const instagramImages = [
    {
      id: 1,
      imageUrl: "https://soledad.pencidesign.net/wp-content/plugins/penci-soledad-instagram/img/1.jpg",
      link: "https://www.instagram.com/p/B1QkMqthU8i/",
    },
    {
      id: 2,
      imageUrl: "https://soledad.pencidesign.net/wp-content/plugins/penci-soledad-instagram/img/2.jpg",
      link: "https://www.instagram.com/p/B1PMQQjhjet/",
    },
    {
      id: 3,
      imageUrl: "https://soledad.pencidesign.net/wp-content/plugins/penci-soledad-instagram/img/3.jpg",
      link: "https://www.instagram.com/p/B1OPSmthyGS/",
    },
    {
      id: 4,
      imageUrl: "https://soledad.pencidesign.net/wp-content/plugins/penci-soledad-instagram/img/4.jpg",
      link: "https://www.instagram.com/p/B1MJHBmBLAh/",
    },
    {
      id: 5,
      imageUrl: "https://soledad.pencidesign.net/wp-content/plugins/penci-soledad-instagram/img/5.jpg",
      link: "https://www.instagram.com/p/B1LxCzrhESN/",
    },
    {
      id: 6,
      imageUrl: "https://soledad.pencidesign.net/wp-content/plugins/penci-soledad-instagram/img/6.jpg",
      link: "https://www.instagram.com/p/B1Iw7jMhz3d/",
    },
    {
      id: 7,
      imageUrl: "https://soledad.pencidesign.net/wp-content/plugins/penci-soledad-instagram/img/7.jpg",
      link: "https://www.instagram.com/p/B1GuRSZBxn9/",
    },
    {
      id: 8,
      imageUrl: "https://soledad.pencidesign.net/wp-content/plugins/penci-soledad-instagram/img/8.jpg",
      link: "https://www.instagram.com/p/B1EEcEhhsca/",
    },
    {
      id: 9,
      imageUrl: "https://soledad.pencidesign.net/wp-content/plugins/penci-soledad-instagram/img/9.jpg",
      link: "https://www.instagram.com/p/B0_adsjheBZ/",
    },
  ];

  return (
    <div className={`widget instagram-widget ${className}`}>
      <div className="mb-6">
        <h3 className="border-1 px-2 py-1 border-l-10 border-l-primary">
          <span className="text-xl font-categoryTitle font-bold pb-2 ">
            {title}
          </span>
        </h3>
      </div>

      <div className="jr-insta-thumb">
        <div className="grid grid-cols-3 gap-1">
          {instagramImages.map((image) => (
            <div key={image.id} className="relative aspect-square overflow-hidden">
              <a
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src={image.imageUrl}
                  alt="Instagram Image"
                  fill
                  sizes="(max-width: 640px) 33vw, (max-width: 768px) 20vw, 10vw"
                  className="object-cover hover:opacity-90 transition-opacity"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

