"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { WidgetTitle } from "@/components/widgetTitle";
import { useGetLatestArticlesQuery } from "@/features/article/api/articleApi";

export const RecentPost = () => {
  const { data, isLoading, error } = useGetLatestArticlesQuery({ limit: 3 });

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
      <div className="footer-widget-wrapper footer-widget-style-1">
        <div className="widget">
          <WidgetTitle title="Son Yazılar" />
          <div className="space-y-4 mt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-3">
                <div className="w-16 h-16 shrink-0 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex flex-col flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    console.error("Recent posts error:", error);
    return (
      <div className="footer-widget-wrapper footer-widget-style-1">
        <div className="widget">
          <WidgetTitle title="Son Yazılar" />
          <div className="text-sm text-gray-500 mt-4">
            Son yazılar yüklenirken bir hata oluştu.
          </div>
        </div>
      </div>
    );
  }

  const recentPosts = data?.articles || [];

  if (recentPosts.length === 0) {
    return (
      <div className="footer-widget-wrapper footer-widget-style-1">
        <div className="widget">
          <WidgetTitle title="Son Yazılar" />
          <div className="text-sm text-gray-500 mt-4">
            Henüz yazı bulunmamaktadır.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="footer-widget-wrapper footer-widget-style-1">
      <div className="widget">
        <WidgetTitle title="Son Yazılar" />
        <div className="space-y-4 mt-4">
          {recentPosts.map((post) => (
            <div key={post._id} className="flex gap-3">
              <div className="w-16 h-16 shrink-0 relative">
                <Link href={`/article/${post.slug}`}>
                  {post.image ? (
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill
                      className="object-cover rounded"
                      sizes="64px"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-400">Resim Yok</span>
                    </div>
                  )}
                </Link>
              </div>
              <div className="flex flex-col">
                <Link 
                  href={`/article/${post.slug}`} 
                  className="text-sm font-medium hover:text-primary transition-colors line-clamp-2"
                >
                  {post.title}
                </Link>
                <span className="text-xs text-gray-500 mt-1">{formatDate(post.createdAt)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
