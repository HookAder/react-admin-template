import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "userLogin",
  initialState: {
    username: "",
    password: "",
    isLogin: false,
  },
  reducers: {
    actionChangeUser: (state, action) => {
      state.username = action.payload.value;
    },
    actionChangePass: (state, action) => {
      state.password = action.payload.value;
    },
    actionLogin: (state) => {
      state.isLogin = true;
      state.username = '';
      state.password = '';
      console.log({ username: state.username, password: state.password });
    },
    actionExitLogin: (state) => {
      state.isLogin = false;
    },
  },
});

export const {
  actionChangeUser,
  actionChangePass,
  actionLogin,
  actionExitLogin,
} = slice.actions;

export const selectorStore = (state: any) => state.login;

export default slice.reducer;
