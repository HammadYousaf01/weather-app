import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, API_BASE_URL } from "src/config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getCityForcast: builder.query<ApiResponse, string>({
      query: (cityName) => ({
        url: "/",
        params: {
          q: cityName,
          appid: API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetCityForcastQuery } = apiSlice;
