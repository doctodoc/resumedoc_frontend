import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootStateType } from "@/api/redux/store";
// import { ResumeAppearanceConfigType } from "./types";
import { initialResumeAppearanceData } from "@/data/resume/resumeFormData";
import {
  AppearanceType,
  defaultAppearance,
} from "@/schema/resume/appearanceSchema";

const initialresumeAppearanceConfigState: AppearanceType = defaultAppearance;

export const resumeAppearanceConfigSlice = createSlice({
  name: "resumeAppearanceConfig",
  initialState: initialresumeAppearanceConfigState,
  reducers: {
    setPaperSize: (
      state: AppearanceType,
      action: PayloadAction<AppearanceType["page"]["format"]>
    ) => {
      console.log(action.payload);
      state = { ...state, page: { ...state.page, format: action.payload } };
    },
  },
});

export const { setPaperSize } = resumeAppearanceConfigSlice.actions;

export const selectAppearance = (state: RootStateType) =>
  state.resumeAppearanceConfig;

export default resumeAppearanceConfigSlice.reducer;
