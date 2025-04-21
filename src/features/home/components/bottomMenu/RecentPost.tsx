import React from "react";
import Link from "next/link";

export const RecentPost = () => {
  const recentPosts = [
    {
      id: 1,
      title: "Kentin Saklı Köşelerinden Manzaralar",
      date: "18 Eylül 2023",
      image: "https://soledad.pencidesign.net/wp-content/uploads/2017/06/cloud.jpg",
      link: "/blog/kentin-sakli-koselerinden-manzaralar",
    },
    {
      id: 2,
      title: "Sonbahar Yürüyüşleri İçin 5 Harika Rota",
      date: "12 Eylül 2023",
      image: "https://soledad.pencidesign.net/wp-content/uploads/2017/06/cloud.jpg",
      link: "/blog/sonbahar-yuruyusleri-icin-5-harika-rota",
    },
    {
      id: 3,
      title: "Şehir Hayatından Kaçış: Doğa ile Buluşma",
      date: "5 Eylül 2023",
      image: "https://soledad.pencidesign.net/wp-content/uploads/2017/06/cloud.jpg",
      link: "/blog/sehir-hayatindan-kacis-doga-ile-bulusma",
    },
  ];

  return (
    <div className="footer-widget-wrapper footer-widget-style-1">
      <div className="widget">
        <h4 className="widget-title penci-border-arrow border-b-2 border-gray-200 pb-2">
          <span className="inner-arrow text-xl font-categoryTitle font-semibold">Son Yazılar</span>
        </h4>
        <div className="space-y-4 mt-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex gap-3">
              <div className="w-16 h-16 flex-shrink-0">
                <Link href={post.link}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover rounded"
                  />
                </Link>
              </div>
              <div className="flex flex-col">
                <Link href={post.link} className="text-sm font-medium hover:text-primary transition-colors">
                  {post.title}
                </Link>
                <span className="text-xs text-gray-500 mt-1">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
