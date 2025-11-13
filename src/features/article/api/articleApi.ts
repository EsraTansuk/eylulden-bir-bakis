import { UpdateArticleModel } from "../models/UpdateArticleModel";
import { CreateArticleModel } from "../models/CreateArticleModel";
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
        query: (id: string) => ({
          url: `/articles/${id}`,
          method: "GET",
        }),
        providesTags: (result, error, id) => [{ type: "Articles", id }],
      }),
      getArticleBySlug: build.query<ArticleModel, string>({
        query: (slug: string) => ({
          // Backend'de slug için özel endpoint yok, slug direkt path parametresi
          url: `/articles/${slug}`,
          method: "GET",
        }),
        providesTags: (result, error, slug) => [{ type: "Articles", id: slug }],
      }),
      createArticle: build.mutation<ArticleModel, CreateArticleModel>({
        query: (data: CreateArticleModel) => ({
          url: `/articles`,
          method: "POST",
          body: {
            title: data.title,
            content: data.content,
            image: data.image || "",
            category: data.category,
            author: data.author,
            socialMediaLinks: data.socialMediaLinks || [],
            status: data.status || "draft",
          },
        }),
        invalidatesTags: ["Articles"],
      }),
      updateArticle: build.mutation<ArticleModel, UpdateArticleModel>({
        query: (data: UpdateArticleModel) => {
          const { _id, ...body } = data;
          return {
            url: `/articles/${_id}`,
            method: "PUT",
            body,
          };
        },
        invalidatesTags: (result, error, { _id }) => [
          { type: "Articles", id: _id },
          "Articles",
        ],
      }),
      deleteArticle: build.mutation<void, string>({
        query: (id: string) => ({
          url: `/articles/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["Articles"],
      }),
    }),
  });

export { articleApi };

export const {
  useGetArticlesQuery,
  useGetArticleQuery,
  useGetArticleBySlugQuery,
  useCreateArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
} = articleApi;

