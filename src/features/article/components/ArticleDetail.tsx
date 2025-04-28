import React from "react";
import Link from "next/link";
import { ArticleDetailBottom } from "./ArticleDetailBottom";

interface ArticleDetailProps {
  slug: string;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ slug }) => {
  // Burada normalde slug'a göre makale verisini getiren bir API çağrısı yapılır
  // Şimdilik sabit veri kullanıyoruz

  const article = {
    title: "Şehrin Gürültüsünden Uzakta: Sakin Mekanlar",
    slug: slug,
    content: `
      <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p>
      <p>I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</p>
      <p>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies.</p>
    `,
    thumbnailUrl:
      "https://soledad.pencidesign.net/wp-content/uploads/2017/06/cloud.jpg",
    categories: [
      { name: "Seyahat", slug: "seyahat" },
      { name: "Yaşam", slug: "yasam" },
    ],
    author: {
      name: "Ahmet Yazar",
      slug: "ahmet-yazar",
    },
    date: "2023-08-15T12:00:00.000Z",
    likeCount: 379,
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article className="bg-white  overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-4">
          {article.categories.map((category, index) => (
            <React.Fragment key={category.slug}>
              <Link
                href={`/category/${category.slug}`}
                className="mr-2 text-sm font-bold uppercase text-primary hover:text-primaryState-hover font-categoryTitle"
              >
                {category.name}
              </Link>
              {index < article.categories.length - 1 && ", "}
            </React.Fragment>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-mainTitle text-center">
          {article.title}
        </h1>

        <div className="text-gray-600 text-sm mb-6 flex items-center gap-3">
          <span>
            Yazar:
            <Link
              href={`/author/${article.author.slug}`}
              className="ml-1 text-primary hover:underline"
            >
              {article.author.name}
            </Link>
          </span>
          <span>|</span>
          <span>{formatDate(article.date)}</span>
        </div>
      </div>

      <div className="border-t border-gray-200 w-full mx-auto mb-8"></div>

      <div className="relative w-full h-96">
        <img
          src={article.thumbnailUrl}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="py-6">
        <div
          className="prose max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
      <ArticleDetailBottom />
    </article>

  );
};
