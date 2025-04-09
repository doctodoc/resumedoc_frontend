import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slices/theme/slice";
import authReducer from "../slices/auth/slice";
import resumeFormReducer from "../slices/resume/resumeFormData/slice";
import resumeAppearanceConfigReducer from "../slices/resume/resumeAppearanceConfig/slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      theme: themeReducer,
      resumeForm: resumeFormReducer,
      resumeAppearanceConfig: resumeAppearanceConfigReducer,
    },
  });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStoreType = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStateType = ReturnType<AppStoreType["getState"]>;
export type AppDispatchType = AppStoreType["dispatch"];
