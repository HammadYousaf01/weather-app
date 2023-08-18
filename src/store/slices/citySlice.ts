import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "searchCity",
  initialState: {
    currentCity: "",
    searchedCities: [] as ApiResponse[],
    showSearchedCities: false,
  },
  reducers: {
    setCurrentCity: (state, action) => {
      state.currentCity = action.payload;
    },

    setShowSearchedCities: (state, action) => {
      state.showSearchedCities = action.payload;
    },

    addSearchedCity: (state, action) => {
      state.searchedCities.unshift(action.payload);
    },

    clearSearchedCities: (state) => {
      state.searchedCities = [];
    },
  },
});

export const {
  setCurrentCity,
  setShowSearchedCities,
  addSearchedCity,
  clearSearchedCities,
} = citySlice.actions;
export default citySlice.reducer;
