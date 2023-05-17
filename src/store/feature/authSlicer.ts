import { createSlice } from "@reduxjs/toolkit";
import { Form } from "react-router-dom";
import { RootState } from "../store";

const initialState = {
  Auth: false,
};

export const AuthSlicer = createSlice({
  name: "isAuth",
  initialState,
  reducers: {
    addAuth: (state) => {
      state.Auth = true;
      console.log(state.Auth);
    },
    removeAuth: (state) => {
      state.Auth = false;
      console.log(state.Auth);
    },
  },
});

export default AuthSlicer.reducer;

export const getAuthStatus = (state: RootState) => state.auth;

export const { addAuth, removeAuth } = AuthSlicer.actions;
