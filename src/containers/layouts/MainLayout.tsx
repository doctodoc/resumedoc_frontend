"use client";

import React, { useRef, useState } from "react";
import TopNav from "../navbar/topNav/TopNav";
import Footer from "../footer/Footer";
import { AuthRegType } from "@/shared/types/authTypes";
import useAuthModal from "@/lib/hooks/auth/useAuthModal";
import AuthModal from "../auth/modals/AuthModal";
import useThemeHook from "@/shared/hooks/useThemeHook";
import { navLinks } from "@/data/linksData/navLinksData";
import DropDownMenu from "../navbar/DropDownNav";
import useGetHeight, {
  CompHeightContext,
} from "@/lib/hooks/elements/useGetHeight";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { openAuthModal, closeAuthModal, isAuthModalOpen } = useAuthModal();
  const { theme: themeMode, configTheme, clearTheme } = useThemeHook();

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { height: topNavHeight, eleRef: topNavRef } = useGetHeight();

  const handleAuth = (type: AuthRegType) => {
    console.log("toggle");
    openAuthModal(type);
  };

  const handleNav = () => {};

  const closeDropDownMenu = () => {
    setIsDropDownOpen(false);
  };

  const openDropDownMenu = () => {
    setIsDropDownOpen(true);
  };

  return (
    <div className="flex flex-col dark:bg-primary_dark h-full ">
      {/* MODALS */}
      <AuthModal isOpen={isAuthModalOpen} close={closeAuthModal} />

      {/* <TopNav
        handleAuthModal={handleAuth}
        themeMode={themeMode}
        configTheme={configTheme}
        clearTheme={clearTheme}
        openMenu={openDropDownMenu}
        navRef={topNavRef}
      />
      {isDropDownOpen && (
        <DropDownMenu
          navLinks={navLinks}
          handleNav={handleNav}
          handleClose={closeDropDownMenu}
          isOpen={isDropDownOpen}
        />
      )} */}

      <CompHeightContext.Provider value={{ topNavHeight }}>
        <div
          className={`flex flex-col sticky h-full w-full`}
          // style={{ minHeight: `calc(90vh - ${topNavHeight}px)` }}
        >
          {children}
        </div>
      </CompHeightContext.Provider>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
