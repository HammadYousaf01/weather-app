import { createSlice } from "@reduxjs/toolkit";

export const resultSlice = createSlice({
  name: "result",
  initialState: {
    showResult: false,
  },
  reducers: {
    setShowResult: (state, action) => {
      state.showResult = action.payload;
    },
  },
});

export const { setShowResult } = resultSlice.actions;
export default resultSlice.reducer;
