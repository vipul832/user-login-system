import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserInfoFormate } from "../../utils/type";

const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  file: "",
};

const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<Omit<UserInfoFormate, "confirmPassword">>
    ) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.password = action.payload.password;
      state.file = action.payload.file;
    },
    removeUser: (state) => {
      state.name = "";
      state.email = "";
      state.phoneNumber = "";
      state.password = "";
      state.file = "";
    },
  },
});

export const getCurrentUser = (state: RootState) => state.user;
export const { setUser, removeUser } = userSlicer.actions;
export default userSlicer.reducer;
