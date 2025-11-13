import { SocialMediaLink } from "./CreateArticleModel";

export interface UpdateArticleModel {
  _id: string;
  title?: string;
  content?: string;
  image?: string;
  category?: string; // Category ObjectId
  author?: string; // User ObjectId
  socialMediaLinks?: SocialMediaLink[];
  status?: "draft" | "published";
}

