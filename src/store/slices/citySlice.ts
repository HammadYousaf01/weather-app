import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "searchCity",
  initialState: {
    currentCity: "",
    previousCities: [] as ApiResponse[],
  },
  reducers: {
    setCurrentCity: (state, action) => {
      state.currentCity = action.payload;
    },

    addPreviousCity: (state, action) => {
      state.previousCities.unshift(action.payload);
    },

    clearPreviousCities: (state) => {
      state.previousCities = [];
    },
  },
});

export const { setCurrentCity, addPreviousCity } = citySlice.actions;
export default citySlice.reducer;
