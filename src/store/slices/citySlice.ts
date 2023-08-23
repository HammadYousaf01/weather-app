import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "searchCity",
  initialState: {
    currentCity: "",
    searchedCities: [] as ApiResponse[],
    comparedCities: [] as string[],
    showSearchedCities: false,
  },
  reducers: {
    setCurrentCity: (state, action) => {
      state.currentCity = action.payload;
    },

    setComparedCities: (state, action) => {
      state.comparedCities.unshift(action.payload);
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
  setComparedCities,
  setShowSearchedCities,
  addSearchedCity,
  clearSearchedCities,
} = citySlice.actions;
export default citySlice.reducer;
