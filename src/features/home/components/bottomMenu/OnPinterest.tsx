import React from "react";

export const OnPinterest = () => {
  // Pinterest resimlerinin URL'leri
  const pinterestImages = [
    "https://soledad.pencidesign.net/wp-content/plugins/penci-soledad-instagram/img/1.jpg",
    "https://soledad.pencidesign.net/wp-content/plugins/penci-soledad-instagram/img/2.jpg",
    "https://soledad.pencidesign.net/wp-content/plugins/penci-soledad-instagram/img/3.jpg",
    "https://soledad.pencidesign.net/wp-content/plugins/penci-soledad-instagram/img/4.jpg",
    "https://soledad.pencidesign.net/wp-content/plugins/penci-soledad-instagram/img/5.jpg",
    "https://soledad.pencidesign.net/wp-content/plugins/penci-soledad-instagram/img/6.jpg",
    "https://soledad.pencidesign.net/wp-content/plugins/penci-soledad-instagram/img/7.jpg",
    "https://soledad.pencidesign.net/wp-content/plugins/penci-soledad-instagram/img/8.jpg",
    "https://soledad.pencidesign.net/wp-content/plugins/penci-soledad-instagram/img/9.jpg",
  ];

  return (
    <div className="footer-widget-wrapper footer-widget-style-1">
      <div className="widget">
        <h4 className="widget-title penci-border-arrow">
          <span className="inner-arrow text-xl font-categoryTitle font-semibold">Pinterest&apos;te Biz</span>
        </h4>
        <div className="grid grid-cols-3 gap-1 mt-4">
          {pinterestImages.map((image, index) => (
            <div key={index} className="aspect-square relative overflow-hidden">
              <a
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <img
                  src={image}
                  alt={`Pinterest image ${index + 1}`}
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
