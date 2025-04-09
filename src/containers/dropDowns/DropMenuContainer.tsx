import { KeyboardArrowDown } from "@mui/icons-material";
import React, { forwardRef, ReactElement, ReactNode } from "react";

type Props = {
  title: string | ReactNode;
  containerClass?: string;
  children?: string | ReactElement;
  toggleMenu?: () => void;
  openMenu?: () => void;
  closeMenu?: () => void;
  isOpen?: boolean;
  dropDownRef?: any;
  withoutIcon?: boolean;
  alignRight?: boolean;
};

const DropMenuContainer = forwardRef(
  (
    {
      title,
      children,
      openMenu,
      toggleMenu,
      closeMenu,
      isOpen,
      withoutIcon,
      alignRight,
      containerClass,
    }: Props,
    ref: any
  ) => {
    return (
      <div
        className="h-full relative flex items-center py-3 md:py-4"
        onMouseOver={openMenu}
        onMouseOut={closeMenu}
      >
        {/* hover:bg-light_gray_widget dark:hover:bg-secondary_dark */}
        <button
          className={`group/drop-menu-button flex gap-1 items-center p-2 text-grey_icon dark:text-dark_secondary_text  rounded-full `}
          onClick={toggleMenu}
        >
          <p>{title}</p>
          {!withoutIcon && (
            <KeyboardArrowDown
              className="group-hover/drop-menu-button:-rotate-180 transform transition-all "
              sx={{ fontWeight: 300 }}
            />
          )}
        </button>

        {isOpen && (
          <div
            className={`${containerClass} flex rounded-b-md flex-col gap-3 text-sm absolute top-full ${
              alignRight ? "right-0" : "left-0"
            } z-[10] whitespace-nowrap bg-white dark:bg-secondary_dark shadow-md p-3 px-4 min-w-[300px] max-w-[500px] hover`}
            ref={ref}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
);

export default DropMenuContainer;
