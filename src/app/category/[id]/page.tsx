import { CategoryPage } from "@/features/category/components/CategoryPage";
import { notFound } from "next/navigation";

export default function CategoryRoutePage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const { id } = params;
  
  if (!id) {
    notFound();
  }
  
  return <CategoryPage categoryId={id} />;
}

