import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WEATHER_API_KEY, WEATHER_API_BASE_URL } from "src/config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: WEATHER_API_BASE_URL }),
  endpoints: (builder) => ({
    getCityForcast: builder.query<ApiResponse, string>({
      query: (cityName) => ({
        url: "/",
        params: {
          q: cityName,
          appid: WEATHER_API_KEY,
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
            appid: WEATHER_API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetCityForcastQuery, useGetLatitudeLongitudeForecastQuery } =
  apiSlice;
