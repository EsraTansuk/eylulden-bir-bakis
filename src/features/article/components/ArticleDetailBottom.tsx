import React from "react";
import Link from "next/link";
import { FaComment, FaHeart, FaFacebook, FaTwitter, FaPinterest, FaEnvelope  } from "react-icons/fa";

export const ArticleDetailBottom = () => {
  return (
    <div className="border-t border-b border-gray-100 py-4 w-full">
      <div className="flex justify-between items-center mx-12">
        {/* Yorumlar */}
        <button className="flex items-center text-text-light hover:text-primary">
          <FaComment />
          <span className="dt-share pl-1">3 comments</span>
        </button>
        {/* Sağ ikonlar */}
        <div className="flex items-center gap-4">
          <button className="flex items-center text-text-light hover:text-primary">
            <FaHeart />
            <span className="dt-share pl-1">24</span>
          </button>
          <Link href="#" target="_blank" rel="noreferrer" className="post-share-item flex items-center text-text-light hover:text-primary">
            <FaFacebook />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" target="_blank" rel="noreferrer" className="post-share-item flex items-center text-text-light hover:text-primary">
            <FaTwitter />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" target="_blank" rel="noreferrer" className="post-share-item flex items-center text-text-light hover:text-primary">
            <FaPinterest />
            <span className="sr-only">Pinterest</span>
          </Link>
          <Link href="mailto:?subject=Konu&body=İçerik" className="post-share-item flex items-center text-text-light hover:text-primary">
            <FaEnvelope />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
