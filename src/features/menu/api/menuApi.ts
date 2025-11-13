import { MenuModel } from "../models/MenuModel";
import { rtkBaseApi } from "@/lib/redux-toolkit/rtkBaseApi";

const menuApi = rtkBaseApi
  .enhanceEndpoints({
    addTagTypes: ["Menus"],
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getMenus: build.query<MenuModel[], void>({
        query: () => ({
          url: `/menus`,
          method: "GET",
        }),
        providesTags: ["Menus"],
      }),
    }),
  });

export { menuApi };

export const { useGetMenusQuery } = menuApi;

