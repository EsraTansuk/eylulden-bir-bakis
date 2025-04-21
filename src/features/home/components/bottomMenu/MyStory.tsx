import React from "react";
import Link from "next/link";

export const MyStory = () => {
  return (
    <div className="footer-widget-wrapper footer-widget-style-1">
      <div className="widget">
        <h4 className="widget-title penci-border-arrow border-b-2 border-gray-200 pb-2">
          <span className="inner-arrow text-xl font-categoryTitle font-semibold ">
            My Story
          </span>
        </h4>
        <div className="mt-4">
          <p>
            <img
              src="https://soledad.pencidesign.net/wp-content/uploads/2015/10/about-footer.jpg"
              alt="My Story"
              className="w-full"
            />
          </p>
          <p className="mt-6 text-gray-600 text-sm">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.{" "}
            <Link href="/about-me" className="text-primary hover:underline">
              Read more…
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
