import React from "react";

interface WidgetTitleProps {
  title: string;
}

export const WidgetTitle = ({ title }: WidgetTitleProps) => {
  return (
    <h4 className="widget-title penci-border-arrow border-b-2 border-gray-200 pb-2">
      <span className="inner-arrow text-xl font-categoryTitle font-medium">
        {title}
      </span>
    </h4>
  );
};
