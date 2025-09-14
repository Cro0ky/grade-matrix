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
  }),
});

export const { useGetMySelfQuery, useGetUsersQuery } = userApi;
