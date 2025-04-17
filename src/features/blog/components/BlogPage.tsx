'use client'

import { ArticleCard } from "@/components/articleCard";

export const BlogPage = () => {
  // Örnek veri
  const article = {
    title: "Bucket Listesindeki Maceralar",
    slug: "bucket-listesindeki-maceralar",
    excerpt: "22 yaşındaki hayallerim ve gerçekleştirmek istediğim maceralar hakkında düşünceler ve planlar...",
    thumbnailUrl: "https://soledad.pencidesign.net/wp-content/uploads/2017/06/cloud.jpg",
    categories: [
      { name: "Anılar", slug: "anilar" },
      { name: "Fotoğrafçılık", slug: "fotografcilik" }
    ],
    author: {
      name: "Ahmet Yazar",
      slug: "ahmet-yazar"
    },
    date: "2023-08-15T12:00:00.000Z",
    likeCount: 379,
    postFormat: "quote" as const
  };

  const articles = [
    article,
    {...article, title: "Yaz Tatili Anıları", postFormat: "quote" as const, slug: "yaz-tatili-anilari"},
    {...article, title: "Doğa Fotoğrafçılığı", postFormat: "gallery" as const, slug: "doga-fotografciligi"},
    {...article, title: "Şehir Turu", postFormat: "video" as const, slug: "sehir-turu"},
    {...article, title: "Tarifler ve Lezzetler", slug: "tarifler-ve-lezzetler"},
    {...article, title: "Köy Hayatı", slug: "koy-hayati"},
  ];

  return (
    <main className="container mx-auto py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <ArticleCard 
            key={index}
            {...article}
          />
        ))}
      </div>
    </main>
  );
}; 