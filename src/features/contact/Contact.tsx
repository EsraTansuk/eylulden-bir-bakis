"use client";

import { StickySideMenu } from "@/components/stickySideMenu/StickySideMenu";
import { Title } from "@/components/Title";
import React, { useState } from "react";
import { useSubmitContactMutation } from "./api/contactApi";

export const Contact = () => {
  const [submitContact, { isLoading: isSubmitting }] = useSubmitContactMutation();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await submitContact(formData).unwrap();

      if (response.success) {
        setSubmitStatus({
          type: "success",
          message: response.message || "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: response.message || "Bir hata oluştu. Lütfen tekrar deneyin.",
        });
      }
    } catch (error: any) {
      setSubmitStatus({
        type: "error",
        message: error?.data?.message || error?.message || "Bir hata oluştu. Lütfen tekrar deneyin.",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 md:px-0">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-4/6">
          <Title title="İletişim" />
          
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Sorularınız, önerileriniz veya işbirliği teklifleriniz için bize ulaşabilirsiniz.
            Mesajınızı bekliyoruz!
          </p>

          {/* İletişim Formu */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-6">
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-subHeadling font-semibold text-textColor mb-2"
                  >
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-text"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-subHeadling font-semibold text-textColor mb-2"
                  >
                    E-posta Adresiniz *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-text"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-subHeadling font-semibold text-textColor mb-2"
                >
                  Konu *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-text"
                  placeholder="Mesajınızın konusu"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-subHeadling font-semibold text-textColor mb-2"
                >
                  Mesajınız *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none font-text"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-3 px-6 rounded-lg font-subHeadling font-semibold text-white
                  transition-all duration-300
                  ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-primary hover:bg-primaryState-hover transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                  }
                `}
              >
                {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
              </button>
            </form>
          </div>

          {/* İletişim Bilgileri */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">İletişim Bilgileri</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-subHeadling font-semibold text-textColor mb-1">
                    E-posta
                  </h4>
                  <a
                    href="mailto:info@eyluldenbirbakis.com"
                    className="text-text-light hover:text-primary transition-colors"
                  >
                    info@eyluldenbirbakis.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-subHeadling font-semibold text-textColor mb-1">
                    Konum
                  </h4>
                  <p className="text-text-light">İstanbul, Türkiye</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="shrink-0">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-subHeadling font-semibold text-textColor mb-1">
                    Çalışma Saatleri
                  </h4>
                  <p className="text-text-light">
                    Pazartesi - Cuma: 09:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/6">
          <StickySideMenu />
        </div>
      </div>
    </div>
  );
};

