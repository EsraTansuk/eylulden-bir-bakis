export interface SocialMediaLink {
  platform: string;
  url: string;
}

export interface CreateArticleModel {
  title: string;
  content: string;
  image?: string;
  category: string; // Category ObjectId
  author: string; // User ObjectId
  socialMediaLinks?: SocialMediaLink[];
  status?: "draft" | "published";
}

