"use client";

import { RootStateType } from "@/lib/store";
import { AuthRegType, InitialAuthStateType } from "@/shared/types/authTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialAuthState: InitialAuthStateType = {
  authRegType: null, //signin or signup
  isForgotPassword: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setAuthRegType: (state, action: PayloadAction<AuthRegType>) => {
      state.authRegType = action.payload;
    },
    setIsForgotPswd: (state, action: PayloadAction<boolean>) => {
      state.isForgotPassword = action.payload;
    },
  },
});

export const { setAuthRegType, setIsForgotPswd } = authSlice.actions;

export const selectAuthRegType = (state: RootStateType) =>
  state.auth.authRegType;
export const selectIsForgotPswd = (state: RootStateType) =>
  state.auth.isForgotPassword;

export default authSlice.reducer;
