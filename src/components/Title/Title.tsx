import React from "react";

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <h2 className="text-3xl font-medium font-categoryTitle mb-6 text-center ">
      {title}
    </h2>
  );
};
