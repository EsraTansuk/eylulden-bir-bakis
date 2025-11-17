"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { StickyMenuTitle } from "../stickyMenuTitle";
import { useGetAboutMeQuery } from "@/features/aboutMe/api/aboutMeApi";

interface AboutSideWidgetProps {
  className?: string;
  title?: string;
}

export const AboutSideWidget: React.FC<AboutSideWidgetProps> = ({
  className = "",
  title = "HAKKIMDA",
}) => {
  const { data: aboutMe, isLoading, error } = useGetAboutMeQuery();

  // Text'ten ilk birkaç cümleyi al (widget için kısa açıklama)
  const shortDescription = useMemo(() => {
    if (!aboutMe?.text) return "";
    // HTML tag'lerini temizle ve ilk 150 karakteri al
    const cleanText = aboutMe.text.replace(/<[^>]*>/g, "").trim();
    const sentences = cleanText.split(/[.!?]+/).filter(s => s.trim().length > 0);
    // İlk 2-3 cümleyi al veya 150 karaktere kadar
    let result = "";
    for (const sentence of sentences) {
      if (result.length + sentence.length > 150) break;
      result += sentence.trim() + ". ";
    }
    return result.trim() || cleanText.substring(0, 150) + "...";
  }, [aboutMe?.text]);

  // Subtitle için text'ten ilk cümleyi al veya varsayılan
  const subtitle = useMemo(() => {
    if (!aboutMe?.text) return "Merhaba, Ben Eylül";
    const cleanText = aboutMe.text.replace(/<[^>]*>/g, "").trim();
    const firstSentence = cleanText.split(/[.!?]+/)[0]?.trim();
    return firstSentence && firstSentence.length < 50 ? firstSentence : "Merhaba, Ben Eylül";
  }, [aboutMe?.text]);

  if (isLoading) {
    return (
      <div className={`widget about-widget ${className}`}>
        <StickyMenuTitle title={title} />
        <div className="about-widget text-center animate-pulse">
          <div className="w-full h-56 bg-gray-200 rounded mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-3"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !aboutMe) {
    // Hata durumunda veya veri yoksa varsayılan içeriği göster
    return (
      <div className={`widget about-widget ${className}`}>
        <StickyMenuTitle title={title} />
        <div className="about-widget text-center">
          <div className="relative w-full h-56 mb-4 overflow-hidden rounded">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Resim Yok</span>
            </div>
          </div>
          <h2 className="text-xl font-bold font-charmonman mb-3">Merhaba, Ben Eylül</h2>
          <div className="text-sm text-gray-600 mb-6">
            <p>Hakkımda bilgileri yüklenemedi.</p>
            <Link
              href="/about-me"
              className="text-primary hover:underline font-semibold block mt-3"
            >
              Devamını oku
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`widget about-widget ${className}`}>
      <StickyMenuTitle title={title} />

      <div className="about-widget text-center">
        {aboutMe.photo && (
          <div className="relative w-full h-56 mb-4 overflow-hidden rounded">
            <Image
              src={aboutMe.photo}
              alt={title}
              fill
              className="object-cover rounded"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        )}

        <h2 className="text-xl font-bold font-charmonman mb-3">{subtitle}</h2>

        <div className="text-sm text-gray-600 mb-6">
          {shortDescription && <p>{shortDescription}</p>}
          <Link
            href="/about-me"
            className="text-primary hover:underline font-semibold block mt-3"
          >
            Devamını oku
          </Link>
        </div>
      </div>
    </div>
  );
};
