import type { IUser } from "@/shared/types/types.ts";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const skillsApi = createApi({
  reducerPath: "skillsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser, void>({
      query: () => `/skills`,
    }),
  }),
});
