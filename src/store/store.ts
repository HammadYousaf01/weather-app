import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "api/apiSlice";
import { cityReducer } from "./slices";
import { mapsApiSlice } from "api/mapsApiSlice";

const store = configureStore({
  reducer: {
    city: cityReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [mapsApiSlice.reducerPath]: mapsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mapsApiSlice.middleware, apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
