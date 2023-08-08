import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
  name: "searchCity",
  initialState: {
    currentCity: "",
    previousCities: [],
  },
  reducers: {
    setCity: (state, action) => {
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

export const { setCity, addPreviousCity } = citySlice.actions;
export default citySlice.reducer;
