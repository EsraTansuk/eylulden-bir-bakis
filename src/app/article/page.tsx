
import { StickySideMenu } from "@/components";
import { ArticleDetailPage } from "@/features/article/components/ArticleDetailPage";

export default function ArticlePage() {
  return (
    <div className="max-w-7xl mx-auto md:p-8">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-4/6">
          <ArticleDetailPage slug="article-1" />
        </div>
        <div className="w-full lg:w-2/6">
          <StickySideMenu />
        </div>
      </div>
    </div>
  );
}
