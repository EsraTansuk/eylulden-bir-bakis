
import { ArticleModel, ArticlesResponse } from "../models/ArticleModel";
import { rtkBaseApi } from "@/lib/redux-toolkit/rtkBaseApi";

interface GetArticlesParams {
  page?: number;
  limit?: number;
  status?: "draft" | "published";
  category?: string;
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
        query: (idOrSlug: string) => {
          // Backend'de hem ID hem slug için aynı endpoint kullanılıyor: /api/articles/:param
          // Backend otomatik olarak ID mi slug mı olduğunu anlıyor
          const url = `/articles/${idOrSlug}`;
          console.log("getArticle URL:", url);
          return {
            url,
            method: "GET",
          };
        },
        providesTags: (result, error, idOrSlug) => [{ type: "Articles", id: idOrSlug }],
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

