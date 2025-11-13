
import { ArticleModel, ArticlesResponse } from "../models/ArticleModel";
import { rtkBaseApi } from "@/lib/redux-toolkit/rtkBaseApi";

interface GetArticlesParams {
  page?: number;
  limit?: number;
  status?: "draft" | "published";
  category?: string;
  subcategory?: string; // Alt kategori ID'si ile filtreleme
  author?: string;
}

const articleApi = rtkBaseApi
  .enhanceEndpoints({
    addTagTypes: ["Articles"],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getArticles: build.query<ArticlesResponse, GetArticlesParams | void>({
        query: (params = {}) => {
          const searchParams = new URLSearchParams();
          if (params?.page) searchParams.append("page", params.page.toString());
          if (params?.limit) searchParams.append("limit", params.limit.toString());
          if (params?.status) searchParams.append("status", params.status);
          if (params?.category) searchParams.append("category", params.category);
          if (params?.subcategory) searchParams.append("subcategory", params.subcategory);
          if (params?.author) searchParams.append("author", params.author);
          
          const queryString = searchParams.toString();
          // Backend endpoint'i: /api/articles (v1 prefix'i yok)
          const url = `/articles${queryString ? `?${queryString}` : ""}`;
          return {
            url,
            method: "GET",
          };
        },
        providesTags: ["Articles"],
      }),
      getArticle: build.query<ArticleModel, string>({
        query: (id: string) => {
          // Backend'de ID için: /api/articles/:id
          // MongoDB ObjectId formatı: 24 karakterlik hex string
          // Backend ID formatını kontrol ediyor, geçersiz ID'ler için 400 dönüyor
          const url = `/articles/${id}`;
          return {
            url,
            method: "GET",
          };
        },
        providesTags: (result, error, id) => [{ type: "Articles", id }],
      }),
      getArticleBySlug: build.query<ArticleModel, string>({
        query: (slug: string) => ({
          // Backend'de slug için özel endpoint yok, slug direkt path parametresi
          // getArticle ile aynı endpoint'i kullanıyor
          url: `/articles/${slug}`,
          method: "GET",
        }),
        providesTags: (result, error, slug) => [{ type: "Articles", id: slug }],
      }),
     
      
      
    }),
  });

export { articleApi };

export const {
  useGetArticlesQuery,
  useGetArticleQuery,
  useGetArticleBySlugQuery,
} = articleApi;

