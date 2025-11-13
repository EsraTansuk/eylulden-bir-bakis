
import { ArticleModel, ArticlesResponse } from "../models/ArticleModel";
import { rtkBaseApi } from "@/lib/redux-toolkit/rtkBaseApi";

interface GetArticlesParams {
  page?: number;
  limit?: number;
  status?: "draft" | "published";
  category?: string;
  subcategory?: string; // Alt kategori ID'si ile filtreleme
  author?: string;
  search?: string; // Arama parametresi
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
          if (params?.search) searchParams.append("search", params.search);
          
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
      getArticlesByCategory: build.query<ArticlesResponse, { categoryId: string; page?: number; limit?: number }>({
        query: ({ categoryId, page = 1, limit = 10 }) => {
          const searchParams = new URLSearchParams();
          if (page) searchParams.append("page", page.toString());
          if (limit) searchParams.append("limit", limit.toString());
          
          const queryString = searchParams.toString();
          // Backend endpoint'i: /api/articles/category/:categoryId (ID veya slug ile çalışır)
          const url = `/articles/category/${categoryId}${queryString ? `?${queryString}` : ""}`;
          return {
            url,
            method: "GET",
          };
        },
        providesTags: (result, error, { categoryId }) => [{ type: "Articles", id: `category-${categoryId}` }],
      }),
      getArticlesByCategorySlug: build.query<ArticlesResponse & { category?: { _id: string; name: string; slug: string; parentCategory?: { _id: string; name: string; slug: string } | null } }, { parentSlug?: string; childSlug?: string; slug?: string; page?: number; limit?: number }>({
        query: ({ parentSlug, childSlug, slug, page = 1, limit = 10 }) => {
          const searchParams = new URLSearchParams();
          if (page) searchParams.append("page", page.toString());
          if (limit) searchParams.append("limit", limit.toString());
          
          const queryString = searchParams.toString();
          let url = "";
          
          // Eğer parentSlug ve childSlug varsa: /api/categories/:parentSlug/:childSlug
          if (parentSlug && childSlug) {
            url = `/categories/${parentSlug}/${childSlug}${queryString ? `?${queryString}` : ""}`;
          } 
          // Eğer sadece slug varsa: /api/categories/:slug
          else if (slug) {
            url = `/categories/${slug}${queryString ? `?${queryString}` : ""}`;
          }
          // Eğer sadece parentSlug varsa (ana kategori): /api/categories/:parentSlug
          else if (parentSlug) {
            url = `/categories/${parentSlug}${queryString ? `?${queryString}` : ""}`;
          }
          
          if (!url) {
            throw new Error("Invalid category slug parameters");
          }
          
          // Debug için console.log
          console.log("Category API Request:", {
            parentSlug,
            childSlug,
            slug,
            url,
            fullUrl: `${process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5001/api"}${url}`
          });
          
          return {
            url,
            method: "GET",
          };
        },
        providesTags: (result, error, { parentSlug, childSlug, slug }) => [{ 
          type: "Articles", 
          id: `category-slug-${parentSlug || slug || ""}-${childSlug || ""}` 
        }],
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
  useGetArticlesByCategoryQuery,
  useGetArticlesByCategorySlugQuery,
} = articleApi;

