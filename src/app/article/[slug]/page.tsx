import { ArticleDetailPage } from "@/features/article/components/ArticleDetailPage";
import { notFound } from "next/navigation";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Normalde burada slug ile makale verisi çekilir
  // Örnek olarak makale bulunamadığında notFound sayfasına yönlendirme yapalım
  if (!slug) {
    notFound();
  }
  
  return <ArticleDetailPage slug={slug} />;
} 