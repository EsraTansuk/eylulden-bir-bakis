import { CategoryPage } from "@/features/category/components/CategoryPage";
import { notFound } from "next/navigation";

// Sabit route'lar - bu route'lar kategori olarak işlenmemeli
const STATIC_ROUTES = [
  "about-me",
  "contact",
  "article",
  "category",
  "admin",
  "api",
];

export default function SlugRoutePage({ 
  params 
}: { 
  params: { slug: string[] } 
}) {
  const { slug } = params;
  
  if (!slug || slug.length === 0) {
    notFound();
  }
  
  // Eğer ilk slug sabit route ise 404 döndür
  if (STATIC_ROUTES.includes(slug[0])) {
    notFound();
  }
  
  // Eğer 2 slug varsa: parent/child kategori
  if (slug.length === 2) {
    return <CategoryPage parentSlug={slug[0]} childSlug={slug[1]} />;
  } 
  // Eğer 1 slug varsa: ana kategori
  else if (slug.length === 1) {
    return <CategoryPage slug={slug[0]} />;
  }
  
  // 2'den fazla slug varsa 404
  notFound();
}

