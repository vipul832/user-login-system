import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/authSlicer";
import userReducer from "./feature/userSlicer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
