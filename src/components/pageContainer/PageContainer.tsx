import React from "react";
import { BottomMenu } from "@/features/home/components/bottomMenu/BottomMenu";

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-8 px-4 lg:px-6 xl:px-0">{children}</div>
      <BottomMenu />
    </>
  );
};
