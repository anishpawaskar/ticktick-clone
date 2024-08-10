import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentPage: "",
  },
  reducers: {
    updateCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});

export const selectAuth = (state) => state.auth;
export const { updateCurrentPage } = authSlice.actions;

export default authSlice.reducer;
