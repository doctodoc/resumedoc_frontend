import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialThemeStateType } from "./types";
import { RootStateType } from "@/api/redux/store";
import { ThemeTypeEnum } from "@/shared/enums/themeEnum";

const initialThemeState: InitialThemeStateType = {
  themeMode: ThemeTypeEnum.light,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialThemeState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<string>) => {
      state.themeMode = action.payload;
    },
  },
});

export const { setThemeMode } = themeSlice.actions;

export const selectThemeMode = (state: RootStateType) => state.theme.themeMode;

export default themeSlice.reducer;
