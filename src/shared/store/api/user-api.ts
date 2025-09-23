import type { IUser } from "@/shared/types/types.ts";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getMySelf: builder.query<IUser, void>({
      query: () => `/me`,
    }),

    getUsers: builder.query<IUser, void>({
      query: () => `/me`,
    }),

    login: builder.mutation<
      { access_token: string },
      { login: string; password: string }
    >({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      transformResponse: () => {
        return { access_token: "access_token_123" };
      },
    }),
  }),
});

export const { useGetMySelfQuery, useGetUsersQuery, useLoginMutation } =
  userApi;
