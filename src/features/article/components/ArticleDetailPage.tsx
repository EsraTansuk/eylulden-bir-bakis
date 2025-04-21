import React from "react";
import { ArticleDetail } from "./ArticleDetail";
import { StickySideMenu } from "@/components";
import { BottomMenu } from "@/features/home/components/bottomMenu/BottomMenu";

interface ArticleDetailPageProps {
  slug: string;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug }) => {
  return (
    <div className="w-full mx-auto md:p-8">
      <div className="max-w-7xl mx-auto pb-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-4/6">
            <ArticleDetail slug={slug} />
          </div>
          <div className="w-full lg:w-2/6">
            <StickySideMenu />
          </div>
        </div>
      </div>
      <BottomMenu />
    </div>
  );
};
