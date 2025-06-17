"use client";

import { PageContainer } from "@/components/pageContainer/PageContainer";
import { StickySideMenu } from "@/components/stickySideMenu/StickySideMenu";
import { Title } from "@/components/title/Title";
import React from "react";
import { MdPhone, MdEmail } from "react-icons/md";
import { ContactForm } from "./contactForm/ContactForm";

export const Contact = () => {
  return (
    <PageContainer>
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-4/6">
          <Title title="Contact Me" />
          <img
            src="https://soledad.pencidesign.net/wp-content/uploads/2015/10/about-footer.jpg"
            alt="About Me Fotoğrafı"
            className="w-full shadow mb-6 mx-auto"
          />
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Have a question, a comment? Want to collaborate in some way? Just
            have something nice to say? I&apos;d love to hear from you! Shoot me a
            message below and I&apos;ll be sure to get back to you as soon as I can.
            Thanks! Lommodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes lorem, nascetur ridiculus
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla onsequat massa ui.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <MdPhone className="text-gray-800 text-xl" />
              <strong className="text-gray-800">Telefon:</strong>
              <span className="text-gray-600">0123 456 789</span>
            </div>
            <div className="flex items-center gap-3">
              <MdEmail className="text-gray-800 text-xl" />
              <strong className="text-gray-800">E-posta:</strong>
              <span className="text-gray-600">pencidesign@gmail.com</span>
            </div>
          </div>

          <ContactForm />
        </div>
        <div className="w-full lg:w-2/6">
          <StickySideMenu />
        </div>
      </div>
    </PageContainer>
  );
};

