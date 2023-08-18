import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "searchCity",
  initialState: {
    currentCity: "",
    previousCities: [] as ApiResponse[],
    showSearchedCities: false,
  },
  reducers: {
    setCurrentCity: (state, action) => {
      state.currentCity = action.payload;
    },

    setShowSearchedCities: (state, action) => {
      state.showSearchedCities = action.payload;
    },

    addPreviousCity: (state, action) => {
      state.previousCities.unshift(action.payload);
    },

    clearPreviousCities: (state) => {
      state.previousCities = [];
    },
  },
});

export const {
  setCurrentCity,
  setShowSearchedCities,
  addPreviousCity,
  clearPreviousCities,
} = citySlice.actions;
export default citySlice.reducer;
