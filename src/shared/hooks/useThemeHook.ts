"use client";
import { useEffect, useState } from "react";
import { ThemeTypeEnum } from "../enums/themeEnum";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/globalHooks";
import { selectThemeMode, setThemeMode } from "@/api/slices/theme/slice";

export type ThemeType = string;

const useThemeHook = () => {
  // const [theme, setTheme] = useState<string>(
  //   localStorage.getItem("theme") ?? ThemeTypeEnum.light
  // );

  const theme = useAppSelector(selectThemeMode);
  const dispatch = useAppDispatch();

  const configTheme = (theme: ThemeType) => {
    dispatch(setThemeMode(theme));
    localStorage.setItem("theme", theme);
  };

  const clearTheme = () => {
    setThemeMode("");
    localStorage.removeItem("theme");
  };

  useEffect(() => {
    if (
      localStorage.theme === ThemeTypeEnum.dark ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add(ThemeTypeEnum.dark);
      configTheme(ThemeTypeEnum.dark);
    } else {
      document.documentElement.classList.remove(ThemeTypeEnum.dark);
      configTheme(ThemeTypeEnum.light);
    }
  }, [theme]);

  return { theme, configTheme, clearTheme };
};

export default useThemeHook;
