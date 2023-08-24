import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "searchCity",
  initialState: {
    searchedCities: [] as string[],
  },
  reducers: {
    addSearchedCity: (state, action) => {
      state.searchedCities.unshift(action.payload);
    },

    clearSearchedCities: (state) => {
      state.searchedCities = [];
    },
  },
});

export const { addSearchedCity, clearSearchedCities } = citySlice.actions;
export default citySlice.reducer;
