"use client";

import { StickySideMenu } from "@/components/stickySideMenu/StickySideMenu";
import { Title } from "@/components/Title";
import React from "react";
import Image from "next/image";
import { useGetAboutMeQuery } from "./api/aboutMeApi";

export const AboutMe = () => {
  const { data: aboutMe, isLoading, error } = useGetAboutMeQuery();

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-0">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-4/6">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="w-full h-64 bg-gray-200 rounded mb-6"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/6">
            <StickySideMenu />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    console.error("About me error:", error);
    return (
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-0">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-4/6">
            <Title title="Hakkımda" />
            <div className="text-gray-600 text-base leading-relaxed mb-6">
              Hakkımda bilgileri yüklenirken bir hata oluştu.
            </div>
          </div>
          <div className="w-full lg:w-2/6">
            <StickySideMenu />
          </div>
        </div>
      </div>
    );
  }

  if (!aboutMe) {
    return (
      <div className="max-w-7xl mx-auto py-8 px-4 md:px-0">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-4/6">
            <Title title="Hakkımda" />
            <div className="text-gray-600 text-base leading-relaxed mb-6">
              Henüz hakkımda bilgisi bulunmamaktadır.
            </div>
          </div>
          <div className="w-full lg:w-2/6">
            <StickySideMenu />
          </div>
        </div>
      </div>
    );
  }

  // Text'i paragraflara böl (çift satır sonlarına göre)
  const paragraphs = aboutMe.text.split(/\n\n+/).filter(p => p.trim());

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 md:px-0">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-4/6">
          <Title title="Hakkımda" />
          
          {aboutMe.photo && (
            <div className="relative w-full h-96 mb-6">
              <Image
                src={aboutMe.photo}
                alt="Hakkımda Fotoğrafı"
                fill
                className="object-cover shadow rounded"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
          )}

          <div className="text-gray-600 text-base leading-relaxed mb-6">
            {paragraphs.map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph.split('\n').map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    {lineIndex < paragraph.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
                {index < paragraphs.length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </React.Fragment>
            ))}
          </div>

          {aboutMe.quote && (
            <blockquote className="border-l-4 border-primary pl-4 italic text-gray-500 mb-6">
              <span className="block mb-2">
                &ldquo;{aboutMe.quote}&rdquo;
              </span>
            </blockquote>
          )}
        </div>
        <div className="w-full lg:w-2/6">
          <StickySideMenu />
        </div>
      </div>
    </div>
  );
};
