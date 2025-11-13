export interface Category {
  _id: string;
  name: string;
  slug?: string;
}

export interface Author {
  _id: string;
  name: string;
  slug?: string;
}

export interface SocialMediaLink {
  platform: string;
  url: string;
}

export interface ArticleModel {
  _id: string;
  title: string;
  content: string;
  image: string;
  category: Category;
  author: Author;
  socialMediaLinks?: SocialMediaLink[];
  status: "draft" | "published";
  slug: string;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface ArticlesResponse {
  articles: ArticleModel[];
  total: number;
  page: number;
  pages: number;
}

