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
  content?: string; // Detay sayfasında gelir, liste sayfalarında gelmez
  excerpt?: string; // Makale özeti (liste sayfalarında gelir)
  image: string | null; // Backend'den null olarak gelebilir
  category: Category; // Kategori (eğer parentCategory varsa bu bir alt kategoridir)
  author: Author;
  socialMediaLinks?: SocialMediaLink[];
  status: "draft" | "published";
  slug: string;
  views: number;
  likes?: number; // Beğeni sayısı
  createdAt: string;
  updatedAt: string;
}

export interface ArticlesResponse {
  articles: ArticleModel[];
  total: number;
  page: number;
  pages: number;
}

