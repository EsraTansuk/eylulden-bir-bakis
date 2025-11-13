import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base URL'i environment variable'dan al, yoksa varsayılan olarak localhost:5001/api kullan
// Backend endpoint'leri /api/v1/articles formatında olduğu için base URL'e /api ekliyoruz
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5001/api";

export const rtkBaseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      // Gerekirse token veya diğer header'ları buraya ekleyebilirsiniz
      // const token = getToken();
      // if (token) {
      //   headers.set("authorization", `Bearer ${token}`);
      // }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});

