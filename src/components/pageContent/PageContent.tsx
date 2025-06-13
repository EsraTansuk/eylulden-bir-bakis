import React from "react";
import { BottomMenu } from "@/features/home/components/bottomMenu/BottomMenu";

interface PageContentProps {
  children: React.ReactNode;
}

export const PageContent = ({ children }: PageContentProps) => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-8 px-4 lg:px-6 xl:px-0">{children}</div>
      <BottomMenu />
    </>
  );
};
