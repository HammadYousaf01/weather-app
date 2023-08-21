import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MAPS_API_KEY, MAPS_API_BASE_URL } from "src/config";

export const mapsApiSlice = createApi({
  reducerPath: "mapsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: MAPS_API_BASE_URL,
    mode: "no-cors",
    prepareHeaders: (headers) => {
      headers.set("Access-Control-Allow-Origin", "*");
      headers.set("Access-Control-Allow-Headers", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLocationDetails: builder.query<{}, string>({
      // query: (latLong) => ({
      //   url: "/",
      //   params: {
      //     latlng: latLong,
      //     key: MAPS_API_KEY,
      //   },
      // }),
      query: (latLong) => `?latlng=${latLong}&key=${MAPS_API_KEY}`,
    }),
  }),
});

export const { useGetLocationDetailsQuery } = mapsApiSlice;
