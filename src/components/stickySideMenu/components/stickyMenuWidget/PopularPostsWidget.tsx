import React from "react";
import Link from "next/link";
import { StickyMenuTitle } from "../stickyMenuTitle";

interface PopularPostsWidgetProps {
  className?: string;
  title?: string;
}

export const PopularPostsWidget: React.FC<PopularPostsWidgetProps> = ({
  className = "",
  title = "Popüler Yazılar",
}) => {
  const popularPosts = [
    {
      id: 1,
      title: "Kentin Saklı Köşelerinden Manzaralar",
      image:
        "https://soledad.pencidesign.net/wp-content/uploads/2017/06/cloud.jpg",
      date: "18 Eylül 2023",
      link: "/blog/kentin-sakli-koselerinden-manzaralar",
    },
    {
      id: 2,
      title: "Sonbahar Yürüyüşleri İçin 5 Harika Rota",
      image:
        "https://soledad.pencidesign.net/wp-content/uploads/2017/06/cloud.jpg",
      date: "12 Eylül 2023",
      link: "/blog/sonbahar-yuruyusleri-icin-5-harika-rota",
    },
    {
      id: 3,
      title: "Şehir Hayatından Kaçış: Doğa ile Buluşma",
      image:
        "https://soledad.pencidesign.net/wp-content/uploads/2017/06/cloud.jpg",
      date: "5 Eylül 2023",
      link: "/blog/sehir-hayatindan-kacis-doga-ile-bulusma",
    },
    {
      id: 4,
      title: "Yerel Lezzetlerin İzinde: Esnaf Lokantaları",
      image:
        "https://soledad.pencidesign.net/wp-content/uploads/2017/06/cloud.jpg",
      date: "28 Ağustos 2023",
      link: "/blog/yerel-lezzetlerin-izinde-esnaf-lokantalari",
    },
    {
      id: 5,
      title: "Şehrin Gürültüsünden Uzakta: Sakin Mekanlar",
      image:
        "https://soledad.pencidesign.net/wp-content/uploads/2017/06/cloud.jpg",
      link: "/blog/sehrin-gurultusunden-uzakta-sakin-mekanlar",
      date: "22 Ağustos 2023",
      
    },
  ];

  return (
    <div className={`widget popular-posts-widget ${className}`}>
      <div className="mb-6">
        <StickyMenuTitle title={title} />
      </div>

      <div className="popular-posts">
        {popularPosts.map((post, index) => (
          <div
            key={post.id}
            className="flex mb-4 pb-4 border-b border-gray-100 last:border-0"
          >
            <div className="w-20 h-20 flex-shrink-0 mr-4 relative">
              <Link href={post.link}>
                <div className="relative w-full h-full overflow-hidden rounded">
                  <img
                    src={post.image}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-0 left-0 w-5 h-5 flex items-center justify-center bg-primary text-white text-sm">
                    {index + 1}
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col">
              <Link
                href={post.link}
                className="mb-1 font-medium text-sm hover:text-primary transition-colors"
              >
                {post.title}
              </Link>
              <span className="text-xs text-gray-500">{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
