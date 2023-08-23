import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "api/apiSlice";
import { cityReducer } from "./slices";

const store = configureStore({
  reducer: {
    city: cityReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
