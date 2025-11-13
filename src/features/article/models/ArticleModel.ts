export interface Category {
  _id: string;
  name: string;
  slug?: string;
  parentCategory?: Category; // Ana kategori (eğer bu bir alt kategori ise)
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
  category: Category; // Kategori (eğer parentCategory varsa bu bir alt kategoridir)
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

