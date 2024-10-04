import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../components/Auth/authSlice";
import optionsSlice from "../components/OptionsPanel/optionsSlice";
import { apiSlice } from "./services/api";
import modalSlice from "../components/Modal/modalSlice";
import taskSlice from "./taskSlice";
import projectSlice from "./slices/projectSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    options: optionsSlice,
    modal: modalSlice,
    task: taskSlice,
    project: projectSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
