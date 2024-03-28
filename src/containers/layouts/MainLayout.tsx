"use client";

import React, { useRef, useState } from "react";
import TopNav from "../navbar/TopNav";
import StoreProvider from "@/app/StoreProvider";
import Footer from "../footer/Footer";
import { AuthRegType } from "@/shared/types/authTypes";
import useAuthModal from "@/lib/hooks/auth/useAuthModal";
import AuthModalContainer from "../auth/modals/AuthModalContainer";
import AuthModal from "../auth/modals/AuthModal";
import useThemeHook from "@/shared/hooks/useThemeHook";
import { navLinks } from "@/data/linksData/navLinksData";
import DropDownMenu from "../dropDowns/DropDownMenu";
import useGetHeight from "@/lib/hooks/elements/useGetHeight";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { openAuthModal, closeAuthModal, isAuthModalOpen } = useAuthModal();
  const { getTheme: themeMode, configTheme, clearTheme } = useThemeHook();

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
    <div className="flex flex-col dark:bg-primary_dark min-h-screen">
      
      {/* MODALS */}
      <AuthModal isOpen={isAuthModalOpen} close={closeAuthModal} />

      <TopNav
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
      )}
      <div
        className={`flex flex-col relative mb-20`}
        style={{ minHeight: `calc(90vh - ${topNavHeight}px)` }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
