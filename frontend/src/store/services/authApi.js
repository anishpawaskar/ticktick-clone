import { apiSlice } from "./api";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    singinUser: builder.mutation({
      query: (body) => ({
        url: "/auth/signin",
        method: "POST",
        body,
      }),
    }),
    signupUser: builder.mutation({
      query: (body) => ({
        url: "/auth/signup",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSinginUserMutation, useSignupUserMutation } = authApi;
