"use client";

import React from "react";
import Link from "next/link";
import { ArticleDetailBottom } from "./ArticleDetailBottom";
import { useGetArticleBySlugQuery } from "../api/articleApi";

interface ArticleDetailProps {
  slug: string;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ slug }) => {
  const { data: article, isLoading, error } = useGetArticleBySlugQuery(slug);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <article className="bg-white overflow-hidden">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4 mx-auto"></div>
          <div className="h-12 bg-gray-200 rounded w-3/4 mb-6 mx-auto"></div>
          <div className="h-64 bg-gray-200 rounded mb-6"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </article>
    );
  }

  if (error || !article) {
    return (
      <article className="bg-white overflow-hidden">
        <div className="text-center py-12">
          <p className="text-red-500">
            Makale yüklenirken bir hata oluştu. Lütfen tekrar deneyin.
          </p>
        </div>
      </article>
    );
  }

  const categorySlug = article.category.slug || article.category._id;
  const authorSlug = article.author.slug || article.author._id;

  return (
    <article className="bg-white overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-4">
          <Link
            href={`/category/${categorySlug}`}
            className="mr-2 text-sm font-bold uppercase text-primary hover:text-primaryState-hover font-categoryTitle"
          >
            {article.category.name}
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-mainTitle text-center">
          {article.title}
        </h1>

        <div className="text-gray-600 text-sm mb-6 flex items-center gap-3">
          <span>
            Yazar:
            <Link
              href={`/author/${authorSlug}`}
              className="ml-1 text-primary hover:underline"
            >
              {article.author.name}
            </Link>
          </span>
          <span>|</span>
          <span>{formatDate(article.createdAt)}</span>
        </div>
      </div>

      <div className="border-t border-gray-200 w-full mx-auto mb-8"></div>

      {article.image && (
        <div className="relative w-full h-96">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="py-6">
        <div
          className="prose max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
      <ArticleDetailBottom />
    </article>
  );
};
