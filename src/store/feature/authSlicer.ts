import { createSlice } from "@reduxjs/toolkit";
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
    },
    removeAuth: (state) => {
      state.Auth = false;
    },
  },
});

export default AuthSlicer.reducer;

export const getAuthStatus = (state: RootState) => state.auth;

export const { addAuth, removeAuth } = AuthSlicer.actions;
