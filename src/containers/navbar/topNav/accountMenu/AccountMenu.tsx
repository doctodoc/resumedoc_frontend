import NavLink from "@/components/buttons/NavLink";
import TextButton from "@/components/buttons/TextButton";
import useAuthModal from "@/lib/hooks/auth/useAuthModal";
import { AuthTypeEnum } from "@/shared/enums/authEnums";
import usePopUpMenu from "@/shared/hooks/usePopUpMenu";
import { AuthRegType } from "@/shared/types/authTypes";
import { ArrowDropDown, Logout } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";

type Props = {
  isAuth: boolean;
};

const AvatarMenu = ({ isAuth }: Props) => {
  const { openAuthModal, closeAuthModal, isAuthModalOpen } = useAuthModal();

  const {
    openPopUp: openPersonalMenu,
    closePopUp: closePersonalMenu,
    popUpState: isPersonalMenuOpen,
    togglePopUp: togglePersonalMenu,
    popUpRef: popUpPersonalRef,
  } = usePopUpMenu();

  const handleAuth = (type: AuthRegType) => {
    console.log("toggle");
    openAuthModal(type);
  };

  return (
    <section className="flex items-center z-nav_bar">
      {isAuth ? (
        <div className="h-full flex items-center relative ">
          <button
            className={`flex gap-1 items-center text-grey_icon dark:text-dark_secondary_text hover:bg-light_gray_widget dark:hover:bg-secondary_dark rounded-full`}
            onClick={togglePersonalMenu}
          >
            <Avatar sx={{ fontSize: "3px" }} className="bg-primary w-8 h-8" />
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
                Account
              </NavLink>
              <NavLink
                className="text-start"
                href={"my-resumes"}
                afterNav={closePersonalMenu}
              >
                Subscription
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
        <div className="flex gap-4 items-center text-base ">
          <TextButton
            onClick={() => {
              handleAuth(AuthTypeEnum.signin);
            }}
          >
            {"Log in"}
          </TextButton>
          <TextButton
            onClick={() => {
              handleAuth(AuthTypeEnum.signup);
            }}
          >
            {"Sign Up"}
          </TextButton>
        </div>
      )}
    </section>
  );
};

export default AvatarMenu;
