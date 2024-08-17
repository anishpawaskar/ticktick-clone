import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../components/Auth/authSlice";
import optionsSlice from "../components/OptionsPanel/optionsSlice";
import { apiSlice } from "./services/api";
import modalSlice from "../components/Modal/modalSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    options: optionsSlice,
    modal: modalSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
