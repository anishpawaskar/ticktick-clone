import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../components/Auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
