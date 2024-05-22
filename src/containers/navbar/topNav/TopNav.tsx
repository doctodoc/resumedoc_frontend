"use client";

import { DarkModeIcon, LightModeIcon } from "@/assets/svg";
import TextButton from "@/components/buttons/TextButton";
import useAuthModal from "@/lib/hooks/auth/useAuthModal";
import { AuthTypeEnum } from "@/shared/enums/authEnums";
import { ThemeTypeEnum } from "@/shared/enums/themeEnum";
import { ThemeType } from "@/shared/hooks/useThemeHook";
import { AuthRegType } from "@/shared/types/authTypes";
import { Add, ArrowDropDown, Logout, MenuRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import DropMenuContainer from "../../dropDowns/DropMenuContainer";
import usePopUpMenu from "@/shared/hooks/usePopUpMenu";
import NavLink from "@/components/buttons/NavLink";
import { AppRoutes } from "@/routes/AppRoutes";

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
  const [isAuth, setStateIsAuth] = useState(true);

  const toggleThemeMode = () => {
    configTheme
      ? configTheme(
          themeMode === ThemeTypeEnum.dark
            ? ThemeTypeEnum.light
            : ThemeTypeEnum.dark
        )
      : null;
  };

  const {
    openPopUp: openResumeMenu,
    closePopUp: closeResumeMenu,
    popUpState: isResumeMenuOpen,
    togglePopUp: toggleResumeMenu,
    popUpRef: popUpResumeRef,
  } = usePopUpMenu();

  const {
    openPopUp: openCoverLetterMenu,
    closePopUp: closeCoverLetterMenu,
    popUpState: isCoverLetterMenuOpen,
    togglePopUp: toggleCoverLetterMenu,
    popUpRef: popUpCoverLetterRef,
  } = usePopUpMenu();

  const {
    openPopUp: openPersonalMenu,
    closePopUp: closePersonalMenu,
    popUpState: isPersonalMenuOpen,
    togglePopUp: togglePersonalMenu,
    popUpRef: popUpPersonalRef,
  } = usePopUpMenu();

  return (
    <nav
      ref={navRef}
      className="dark:text-dark_secondary_text px-4 sm:px-6 md:px-8 xl:px-10  flex justify-between border-light_border_color/30 backdrop-blur-md z-nav_bar shadow-md dark:shadow-none shadow-light_gray_bg/10 bg-light_pry_bg/30 sticky top-0 dark:bg-secondary_dark "
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

        <div className="hidden md:flex gap-4 items-center h-full text-sm xl:text-base">
          <DropMenuContainer
            title={"Resumes"}
            toggleMenu={toggleResumeMenu}
            openMenu={openResumeMenu}
            closeMenu={closeResumeMenu}
            isOpen={isResumeMenuOpen}
            dropDownRef={popUpResumeRef}
          >
            {
              <div className={"flex flex-col gap-2"}>
                <NavLink
                  href={AppRoutes.resume.buildResume}
                  className="flex gap-2 items-center"
                  afterNav={closeResumeMenu}
                >
                  <p>{"New Resume"}</p>
                  <Add sx={{ fontSize: 18 }} />
                </NavLink>
                <NavLink afterNav={closeResumeMenu} href={AppRoutes.resume.myResumes}>
                  <p>{"My Resumes"}</p>
                </NavLink>
                <NavLink
                  afterNav={closeResumeMenu}
                  href={AppRoutes.resume.resumeTemplates}
                >
                  <p>{"Resume Templates"}</p>
                </NavLink>
              </div>
            }
          </DropMenuContainer>
          <DropMenuContainer
            title={"Cover Letters"}
            toggleMenu={toggleCoverLetterMenu}
            openMenu={openCoverLetterMenu}
            closeMenu={closeCoverLetterMenu}
            isOpen={isCoverLetterMenuOpen}
            dropDownRef={popUpCoverLetterRef}
          >
            {
              <div className={"flex flex-col gap-2"}>
                <NavLink
                  afterNav={closeCoverLetterMenu}
                  href={AppRoutes.coverLetter.createCoverLetter}
                  className="flex gap-2 items-center"
                >
                  <p>{"New Cover Letter"}</p>
                  <Add sx={{ fontSize: 18 }} />
                </NavLink>
                <NavLink
                  afterNav={closeCoverLetterMenu}
                  href={AppRoutes.coverLetter.myCoverLetters}
                >
                  <p>{"My Cover Letters"}</p>
                </NavLink>
                <NavLink
                  afterNav={closeCoverLetterMenu}
                  href={AppRoutes.coverLetter.coverLetterSamples}
                >
                  <p>{"Cover Letter Samples"}</p>
                </NavLink>
              </div>
            }
          </DropMenuContainer>

          {/* <Link href={"/my-resume"}>
            <p>{"My Resumes"}</p>
          </Link>
          <Link href={"/select-resume"}>
            <p>{"New Resume"}</p>
          </Link>
          <Link href={"/cover-letter"}>
            <p>{"Cover Letter"}</p>
          </Link> */}
          <Link
            href={AppRoutes.blog.index}
            className="p-2 text-grey_icon dark:text-dark_secondary_text hover:bg-light_gray_widget dark:hover:bg-secondary_dark rounded-full"
          >
            <p>{"Blog"}</p>
          </Link>
        </div>
      </section>

      <section className="flex gap-6">
        {/* <button onClick= {()=>{clearTheme && clearTheme()}}>
          Use device them
        </button> */}

        <div className="flex items-center py-3 md:py-4">
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

        <section className="flex items-center ">
          {isAuth ? (
            <div className="h-full flex items-center relative py-3 md:py-4">
              <button
                className={`flex gap-1 items-center p-2 text-grey_icon dark:text-dark_secondary_text hover:bg-light_gray_widget dark:hover:bg-secondary_dark rounded-full`}
                onClick={togglePersonalMenu}
              >
                <Avatar sx={{ bgcolor: "#0DD354" }} />
                <ArrowDropDown />
              </button>

              {isPersonalMenuOpen && (
                <div
                  className={`flex flex-col gap-3 text-sm absolute top-full right-0 whitespace-nowrap bg-white dark:bg-secondary_dark shadow-md p-3 px-4`}
                  ref={popUpPersonalRef}
                >
                  <NavLink
                    className="text-start"
                    href={"dashboard"}
                    afterNav={closePersonalMenu}
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    className="text-start"
                    href={"my-resumes"}
                    afterNav={closePersonalMenu}
                  >
                    My Resumes
                  </NavLink>
                  <NavLink
                    className="text-start"
                    href={"my-cover-letters"}
                    afterNav={closePersonalMenu}
                  >
                    My Cover Letters
                  </NavLink>
                  <NavLink
                    className="text-start"
                    href={"subscription"}
                    afterNav={closePersonalMenu}
                  >
                    Subscription
                  </NavLink>
                  <NavLink
                    className="text-start"
                    href={"settings"}
                    afterNav={closePersonalMenu}
                  >
                    Settings
                  </NavLink>
                  <button className="text-start text-red-400 flex gap-3 mt-6">
                    <p>Log Out</p>
                    <Logout sx={{ fontSize: 20 }} />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-4 items-center text-sm py-3 md:py-4">
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
          )}
        </section>
      </section>
    </nav>
  );
};

export default TopNav;
