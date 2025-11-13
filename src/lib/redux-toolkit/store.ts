import { configureStore } from "@reduxjs/toolkit";
import { rtkBaseApi } from "./rtkBaseApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [rtkBaseApi.reducerPath]: rtkBaseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkBaseApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

