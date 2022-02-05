import { createSlice } from "@reduxjs/toolkit";
const initialState = "";

const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialState },
  reducers: {
    themecolor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { themecolor } = themeSlice.actions;

export default themeSlice.reducer;
