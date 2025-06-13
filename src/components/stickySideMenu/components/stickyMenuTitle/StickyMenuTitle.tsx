import React from "react";

interface StickyMenuTitleProps {
  title: string;
}

export const StickyMenuTitle = ({ title }: StickyMenuTitleProps) => {
  return (
    <div className="penci-border-arrow mb-6">
      <h3 className=" border-1 font-semibold text-lg  px-2 py-1 border-l-10 border-l-primary">
        {title}
      </h3>
    </div>
  );
};
