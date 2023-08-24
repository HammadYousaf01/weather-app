import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WEATHER_API_KEY, WEATHER_API_BASE_URL } from "src/config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: WEATHER_API_BASE_URL }),
  endpoints: (builder) => ({
    getCityForecast: builder.query<ApiResponse, string>({
      query: (cityName) => ({
        url: "/",
        params: {
          q: cityName,
          appid: WEATHER_API_KEY,
        },
      }),
    }),

    getCitiesForecast: builder.query<ApiResponse[], string[]>({
      async queryFn(cities, _queryApi, _extraOptions, fetchWithBQ) {
        const citiesData: ApiResponse[] = [];

        for (const city of cities) {
          const cityResult = await fetchWithBQ({
            url: "/",
            params: {
              q: city,
              appid: WEATHER_API_KEY,
            },
          });

          if (cityResult.error) {
            return { error: cityResult.error as ApiError };
          }
          citiesData.push(cityResult.data as ApiResponse);
        }
        return { data: citiesData };
      },
    }),
  }),
});

export const { useGetCityForecastQuery, useGetCitiesForecastQuery } = apiSlice;
