import {
  RootStateType,
  AppDispatchType,
  AppStoreType,
} from "@/api/redux/store";
import { useDispatch, useSelector, useStore } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const useAppStore: () => AppStoreType = useStore;
