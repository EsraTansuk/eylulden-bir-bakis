"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StickyMenuTitle } from "../stickyMenuTitle";
import { useGetPopularArticlesQuery } from "@/features/article/api/articleApi";

interface PopularPostsWidgetProps {
  className?: string;
  title?: string;
}

export const PopularPostsWidget: React.FC<PopularPostsWidgetProps> = ({
  className = "",
  title = "Popüler Yazılar",
}) => {
  const { data, isLoading, error } = useGetPopularArticlesQuery({ limit: 5 });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className={`widget popular-posts-widget ${className}`}>
        <div className="mb-6">
          <StickyMenuTitle title={title} />
        </div>
        <div className="popular-posts">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex mb-4  border-b border-gray-100 last:border-0"
            >
              <div className="w-20 h-20 shrink-0 mr-4 relative bg-gray-200 rounded animate-pulse"></div>
              <div className="flex flex-col flex-1">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    console.error("Popular posts error:", error);
    return (
      <div className={`widget popular-posts-widget ${className}`}>
        <div className="mb-6">
          <StickyMenuTitle title={title} />
        </div>
        <div className="text-sm text-gray-500">
          Popüler yazılar yüklenirken bir hata oluştu.
        </div>
      </div>
    );
  }

  const popularPosts = data?.articles || [];

  if (popularPosts.length === 0) {
    return (
      <div className={`widget popular-posts-widget ${className}`}>
        <div className="mb-6">
          <StickyMenuTitle title={title} />
        </div>
        <div className="text-sm text-gray-500">
          Henüz popüler yazı bulunmamaktadır.
        </div>
      </div>
    );
  }

  return (
    <div className={`widget popular-posts-widget ${className}`}>
      <div className="mb-6">
        <StickyMenuTitle title={title} />
      </div>

      <div className="popular-posts">
        {popularPosts.map((post, index) => (
          <div
            key={post._id}
            className="flex mb-2 pb-2 border-b border-gray-100 last:border-0"
          >
            <div className="w-20 h-20 shrink-0 mr-4 relative">
              <Link href={`/article/${post.slug}`}>
                <div className="relative w-full h-full overflow-hidden rounded">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="80px"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xs text-gray-400">Resim Yok</span>
                    </div>
                  )}
                  <div className="absolute top-0 left-0 w-6 h-6 flex items-center justify-center bg-primary text-white font-medium text-xs">
                    {index + 1}
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex flex-col">
              <Link
                href={`/article/${post.slug}`}
                className="mb-1 font-medium text-sm hover:text-primary transition-colors line-clamp-2"
              >
                {post.title}
              </Link>
              <span className="text-xs text-gray-500">{formatDate(post.createdAt)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
