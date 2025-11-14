import { AboutMeModel } from "../models/AboutMeModel";
import { rtkBaseApi } from "@/lib/redux-toolkit/rtkBaseApi";

const aboutMeApi = rtkBaseApi
  .enhanceEndpoints({
    addTagTypes: ["AboutMe"],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getAboutMe: build.query<AboutMeModel, void>({
        query: () => ({
          url: `/about`,
          method: "GET",
        }),
        providesTags: ["AboutMe"],
      }),
    }),
  });

export { aboutMeApi };

export const { useGetAboutMeQuery } = aboutMeApi;

