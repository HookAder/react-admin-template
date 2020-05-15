import { configureStore } from "@reduxjs/toolkit";
import { default as globalSlice } from "./slice";
import { default as loginSlice } from "../pages/Login/loginSlice";
import { default as homeSlice } from "../pages/Home/homeSlice";

export default configureStore({
  reducer: {
    global: globalSlice,
    login: loginSlice,
    home: homeSlice,
  },
  devTools: true,
});
