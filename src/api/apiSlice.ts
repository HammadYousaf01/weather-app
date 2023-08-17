import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, API_BASE_URL } from "src/config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getCityForcast: builder.query<ApiResponse, any>({
      query: (cityName) => ({
        url: "/",
        params: {
          q: cityName,
          appid: API_KEY,
        },
      }),
    }),
    getLatitudeLongitudeForecast: builder.query<ApiResponse, string>({
      query: (latLong) => {
        const [lat, lon] = latLong.split(",");

        return {
          url: "/",
          params: {
            lat,
            lon,
            appid: API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetCityForcastQuery, useGetLatitudeLongitudeForecastQuery } =
  apiSlice;
