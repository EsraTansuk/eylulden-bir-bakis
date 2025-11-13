"use client";

import React from "react";
import { useGetArticlesByCategoryQuery, useGetArticlesByCategorySlugQuery } from "@/features/article/api/articleApi";
import { ArticleList } from "@/features/article/components/ArticleList";
import { EmptyState } from "@/components/emptyState";
import { Title } from "@/components/Title";
import { StickySideMenu } from "@/components/stickySideMenu/StickySideMenu";
import { FaFolderOpen } from "react-icons/fa";

interface CategoryPageProps {
  categoryId?: string;
  parentSlug?: string;
  childSlug?: string;
  slug?: string;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ 
  categoryId, 
  parentSlug, 
  childSlug, 
  slug 
}) => {
  // Slug bazlı sorgu (yeni endpoint)
  const {
    data: articlesDataBySlug,
    isLoading: isLoadingBySlug,
    error: errorBySlug,
  } = useGetArticlesByCategorySlugQuery(
    { parentSlug, childSlug, slug, page: 1, limit: 20 },
    { skip: !parentSlug && !childSlug && !slug } // Sadece slug varsa çalıştır
  );

  // ID bazlı sorgu (eski endpoint - hem ID hem slug ile çalışır)
  const {
    data: articlesDataById,
    isLoading: isLoadingById,
    error: errorById,
  } = useGetArticlesByCategoryQuery(
    { categoryId: categoryId!, page: 1, limit: 20 },
    { skip: !categoryId || !!parentSlug || !!childSlug || !!slug } // Sadece categoryId varsa ve slug yoksa çalıştır
  );

  // Slug varsa slug verisini, yoksa ID verisini kullan
  const articlesData = articlesDataBySlug || articlesDataById;
  const isLoading = isLoadingBySlug || isLoadingById;
  const error = errorBySlug || errorById;

  // Kategori adını response'dan veya ilk makaleden al
  const categoryName = 
    articlesDataBySlug?.category?.name ||
    articlesData?.articles?.[0]?.category?.name || 
    "Kategori";

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-0">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-4/6">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-64 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/6">
            <StickySideMenu />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-0">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-4/6">
            <div className="text-center py-12">
              <p className="text-red-500">
                Kategori yüklenirken bir hata oluştu. Lütfen tekrar deneyin.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/6">
            <StickySideMenu />
          </div>
        </div>
      </div>
    );
  }

  const hasArticles =
    articlesData?.articles && articlesData.articles.length > 0;

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 md:px-0">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-4/6">
          <Title title={categoryName} />

          {hasArticles ? (
            <ArticleList
              articles={articlesData.articles}
              isLoading={false}
            />
          ) : (
            <EmptyState
              title="Henüz Bu Kategoriye Ait Makale Bulunmamaktadır"
              message="Bu kategoride henüz yayınlanmış makale bulunmamaktadır. Lütfen daha sonra tekrar kontrol edin."
              icon={<FaFolderOpen className="text-6xl" />}
            />
          )}
        </div>
        <div className="w-full lg:w-2/6">
          <StickySideMenu />
        </div>
      </div>
    </div>
  );
};

