import { KeyboardArrowDown } from "@mui/icons-material";
import React, { forwardRef, ReactElement } from "react";

type Props = {
  title: string;
  children?: string | ReactElement;
  toggleMenu?: () => void;
  openMenu?: () => void;
  closeMenu?: () => void;
  isOpen?: boolean;
  dropDownRef?: any;
};

const DropMenuContainer = forwardRef(
  (
    { title, children, openMenu, toggleMenu, closeMenu, isOpen }: Props,
    ref: any
  ) => {
    return (
      <div
        className="h-full relative flex items-center py-3 md:py-4"
        onMouseOver={openMenu}
        onMouseOut={closeMenu}
      >
        <button
          className={`flex gap-1 items-center p-2 text-grey_icon dark:text-dark_secondary_text hover:bg-light_gray_widget dark:hover:bg-secondary_dark rounded-full`}
          onClick={toggleMenu}
        >
          <p>{title}</p>
          <KeyboardArrowDown />
        </button>

        {isOpen && (
          <div
            className={`flex rounded-b-md flex-col gap-3 text-sm absolute top-full left-0 whitespace-nowrap bg-white dark:bg-secondary_dark shadow-md p-3 px-4 min-w-[300px] max-w-[500px]`}
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
