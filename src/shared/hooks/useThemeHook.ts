"use client";
import { useEffect, useState } from "react";
import { ThemeTypeEnum } from "../enums/themeEnum";

export type ThemeType = ThemeTypeEnum.dark | ThemeTypeEnum.light | string;

const useThemeHook = () => {
  const [getTheme, setTheme] = useState(
    localStorage.getItem("theme") ?? ThemeTypeEnum.light
  );

  const configTheme = (theme: ThemeType) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  const clearTheme = () => {
    setTheme("");
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
  }, [getTheme]);

  return { getTheme, setTheme, configTheme, clearTheme };
};

export default useThemeHook;
