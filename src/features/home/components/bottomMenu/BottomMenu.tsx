import React from "react";
import { MyStory } from "./MyStory";
import { RecentPost } from "./RecentPost";
import { OnPinterest } from "./OnPinterest";

export const BottomMenu = () => {
  return (
    <div className="bg-gray-50 py-16 border-t border-gray-200 max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MyStory />
          <RecentPost />
          <OnPinterest />
        </div>
      </div>
    </div>
  );
};
