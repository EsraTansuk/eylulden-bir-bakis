import React from "react";
import { MyStory } from "./MyStory";
import { RecentPost } from "./RecentPost";
import { OnPinterest } from "./OnPinterest";

export const BottomMenu = () => {
  return (
    <>
      <div className=" border-t border-gray-200 w-full mx-auto"></div>
      <div className="max-w-7xl mx-auto py-16 px-12 md:px-14 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MyStory />
          <RecentPost />
          <OnPinterest />
        </div>
      </div>
    </>
  );
};
