import { KeyboardArrowDown } from "@mui/icons-material";
import React, { ReactElement } from "react";

type Props = {
  title: string;
  children?: string | ReactElement;
  handleMenu?: () => void;
  isOpen?: boolean;
  dropDownRef?: any
};

const DropMenuContainer = ({ title, children, handleMenu, isOpen, dropDownRef}: Props) => {
  return (
    <div className="h-full relative flex items-center py-3 md:py-4">
      <button
        className={`flex gap-1 items-center p-1 text-grey_icon dark:text-dark_secondary_text hover:bg-light_gray_widget dark:hover:bg-secondary_dark rounded-full`}
        onClick={handleMenu}
      >
        <p>{title}</p>
        <KeyboardArrowDown />
      </button>

      {isOpen && (
        <div
          className={`flex rounded-b-md flex-col gap-3 text-sm absolute top-full left-0 whitespace-nowrap bg-white dark:bg-secondary_dark shadow-md p-3 px-4 min-w-[300px] max-w-[500px]`} ref={dropDownRef}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default React.forwardRef(DropMenuContainer);
