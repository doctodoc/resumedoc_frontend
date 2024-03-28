"use client";

import { DarkModeIcon, LightModeIcon } from "@/assets/svg";
import TextButton from "@/components/buttons/TextButton";
import useAuthModal from "@/lib/hooks/auth/useAuthModal";
import { AuthTypeEnum } from "@/shared/enums/authEnums";
import { ThemeTypeEnum } from "@/shared/enums/themeEnum";
import { ThemeType } from "@/shared/hooks/useThemeHook";
import { AuthRegType } from "@/shared/types/authTypes";
import { MenuRounded } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

type Props = {
  handleAuthModal: (type: AuthRegType) => void;
  themeMode?: ThemeType;
  configTheme?: (themeMode: ThemeType) => void;
  clearTheme?: () => void;
  openMenu?: () => void;
  navRef?: React.LegacyRef<HTMLDivElement>;
};

const TopNav = ({
  handleAuthModal,
  themeMode,
  configTheme,
  clearTheme,
  openMenu,
  navRef,
}: Props) => {
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
    <nav
      ref={navRef}
      className="dark:text-dark_secondary_text px-4 sm:px-6 md:px-8 xl:px-10 py-3 md:py-4 flex justify-between border-light_border_color/30 backdrop-blur-md z-nav_bar shadow-md dark:shadow-none shadow-light_gray_bg/10 bg-light_pry_bg/30 sticky top-0 dark:bg-secondary_dark "
    >
      <section className="flex gap-4 items-center">
        <button
          onClick={openMenu}
          className="flex md:hidden items-center text-title_grey dark:text-dark_secondary_text"
        >
          <MenuRounded />
        </button>
        <Link
          className="font-bold text-lg text-title_grey dark:text-dark_primary_text"
          href={"/"}
        >
          Resume<span className="text-primary">Doc</span>
        </Link>
        <div className="hidden md:flex gap-4 items-center text-sm xl:text-base">
          <Link href={"/my-resume"}>
            <p>{"My Resumes"}</p>
          </Link>
          <Link href={"/select-resume"}>
            <p>{"New Resume"}</p>
          </Link>
          <Link href={"/cover-letter"}>
            <p>{"Cover Letter"}</p>
          </Link>
          <Link href={"/blog"}>
            <p>{"Blog"}</p>
          </Link>
        </div>
      </section>

      <section className="flex gap-6">
        {/* <button onClick= {()=>{clearTheme && clearTheme()}}>
          Use device them
        </button> */}

        <div className="flex items-center">
          <button
            onClick={() => {
              toggleThemeMode();
            }}
            className="shadow-md p-2  rounded-full aspect-square dark:bg-dark_icon_circle"
          >
            {themeMode === ThemeTypeEnum.dark ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </button>
        </div>
        <div className="flex gap-4 items-center text-sm">
          <TextButton
            onClick={() => {
              handleAuthModal(AuthTypeEnum.signin);
            }}
          >
            {"Log in"}
          </TextButton>
          <TextButton
            onClick={() => {
              handleAuthModal(AuthTypeEnum.signup);
            }}
          >
            {"Sign Up"}
          </TextButton>
        </div>
      </section>
    </nav>
  );
};

export default TopNav;
