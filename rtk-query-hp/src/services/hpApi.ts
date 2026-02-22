import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Character } from "../types/character";

export const hpApi = createApi({
  reducerPath: "hpApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hp-api.onrender.com/api/",
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<Character[], void>({
      query: () => "character",
    }),
  }),
});

export const { useGetCharactersQuery } = hpApi;
