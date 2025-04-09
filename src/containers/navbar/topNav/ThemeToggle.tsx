import { DarkModeIcon, LightModeIcon } from "@/assets/svg";
import { ThemeTypeEnum } from "@/shared/enums/themeEnum";
import useThemeHook from "@/shared/hooks/useThemeHook";
import React from "react";

type Props = {};

const ThemeToggle = () => {
  const { theme: themeMode, configTheme, clearTheme } = useThemeHook();

  const toggleThemeMode = () => {
    configTheme
      ? configTheme(
          themeMode === ThemeTypeEnum.dark
            ? ThemeTypeEnum.light
            : ThemeTypeEnum.dark
        )
      : null;
  };

  return (
    <div className="flex items-center ">
      <button
        onClick={() => {
          toggleThemeMode();
        }}
        className="shadow-md p-1 rounded-full aspect-square dark:bg-dark_icon_circle"
      >
        {themeMode === ThemeTypeEnum.dark ? (
          <LightModeIcon />
        ) : (
          <DarkModeIcon />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
