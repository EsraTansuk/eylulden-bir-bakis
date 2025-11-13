import { CategoryPage } from "@/features/category/components/CategoryPage";
import { notFound } from "next/navigation";

export default function CategorySlugRoutePage({ 
  params 
}: { 
  params: { slug: string[] } 
}) {
  const { slug } = params;
  
  if (!slug || slug.length === 0) {
    notFound();
  }
  
  // Eğer 2 slug varsa: parent/child
  // Eğer 1 slug varsa: kategori slug
  if (slug.length === 2) {
    return <CategoryPage parentSlug={slug[0]} childSlug={slug[1]} />;
  } else if (slug.length === 1) {
    return <CategoryPage slug={slug[0]} />;
  }
  
  notFound();
}

