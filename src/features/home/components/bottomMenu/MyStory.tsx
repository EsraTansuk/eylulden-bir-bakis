import React from "react";
import Link from "next/link";
import { WidgetTitle } from "@/components/widgetTitle";

export const MyStory = () => {
  return (
    <div className="footer-widget-wrapper footer-widget-style-1">
      <div className="widget">
        <WidgetTitle title="My Story" />
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
