import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../components/Auth/authSlice";
import optionsSlice from "../components/OptionsPanel/optionsSlice";
import { apiSlice } from "./services/api";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    options: optionsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
