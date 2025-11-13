"use client";

import { ArticleCard } from "@/components/articleCard";
import { useGetArticlesQuery } from "../api/articleApi";
import { ArticleModel } from "../models/ArticleModel";

// Backend'den gelen ArticleModel'i ArticleCard props'una dönüştür
const transformArticleForCard = (article: ArticleModel) => {
  // Backend'den excerpt geliyorsa onu kullan, yoksa content'ten oluştur
  const excerpt = article.excerpt
    ? article.excerpt
    : article.content
    ? article.content.replace(/<[^>]*>/g, "").substring(0, 150) + "..."
    : "";

  // Kategorileri array olarak oluştur (ana kategori + alt kategori)
  const categories = [];

  // Eğer category'nin parentCategory'si varsa, önce ana kategoriyi ekle
  if (article.category?.parentCategory) {
    categories.push({
      name: article.category.parentCategory.name,
      slug: article.category.parentCategory.slug || article.category.parentCategory._id,
    });
    // Sonra alt kategoriyi ekle
    categories.push({
      name: article.category.name,
      slug: article.category.slug || article.category._id,
    });
  } else if (article.category) {
    // Sadece ana kategori varsa
    categories.push({
      name: article.category.name,
      slug: article.category.slug || article.category._id,
    });
  }

  return {
    title: article.title,
    slug: article.slug,
    excerpt,
    thumbnailUrl: article.image || "",
    categories,
    author: {
      name: article.author?.name || "",
      slug: article.author?.slug || article.author?._id || "",
    },
    date: article.createdAt,
    likeCount: article.views,
    postFormat: "standard" as const,
  };
};

interface ArticleListProps {
  articles?: ArticleModel[];
  isLoading?: boolean;
}

export const ArticleList = ({ articles: providedArticles, isLoading: providedIsLoading }: ArticleListProps = {}) => {
  // Eğer articles prop'u geçilmişse, API çağrısı yapma
  const { data: response, isLoading: isLoadingFromApi, error } = useGetArticlesQuery(
    { status: "published" },
    { skip: !!providedArticles } // Eğer articles prop'u varsa API çağrısını atla
  );

  // Prop'tan gelen articles varsa onu kullan, yoksa API'den gelen veriyi kullan
  const articles = providedArticles || response?.articles || [];
  const isLoading = providedIsLoading !== undefined ? providedIsLoading : isLoadingFromApi;

  if (isLoading) {
    return (
      <main className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white rounded-md overflow-hidden shadow-md animate-pulse"
            >
              <div className="h-64 bg-gray-200"></div>
              <div className="p-5 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  if (error) {
    console.error("ArticleList Error:", error);
    return (
      <main className="container mx-auto">
        <div className="text-center py-12">
          <p className="text-red-500 mb-2">
            Makaleler yüklenirken bir hata oluştu.
          </p>
          <p className="text-sm text-gray-500">
            {error && "status" in error
              ? `Hata: ${error.status} - ${JSON.stringify(error)}`
              : "Lütfen tarayıcı konsolunu kontrol edin."}
          </p>
        </div>
      </main>
    );
  }

  if (articles.length === 0) {
    return (
      <main className="container mx-auto">
        <div className="text-center py-12">
          <p className="text-gray-500">Henüz makale bulunmamaktadır.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article._id} {...transformArticleForCard(article)} />
        ))}
      </div>
    </main>
  );
};
