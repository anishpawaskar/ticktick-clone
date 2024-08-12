import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../components/Auth/authSlice";
import optionsSlice from "../components/OptionsPanel/optionsSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    options: optionsSlice,
  },
});
