import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "global",
  initialState: {
    name: "globalSlice",
  },
  reducers: {},
});

export const selectorStore = (state: any) => state.global;

export default slice.reducer;
