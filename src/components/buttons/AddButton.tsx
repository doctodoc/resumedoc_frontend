import { ReactElement } from "react";
import CurvedButton from "./CurvedButton";
import { Add } from "@mui/icons-material";
import { GenericButtonProps } from "./Button";

interface AddButtonProps extends GenericButtonProps {
  children: string | ReactElement | ReactElement[];
  bgColor?: string;
  amount?: number;
  disabled?: boolean;
  disableMessage?: string;
}

const AddButton = ({
  children,
  bgColor,
  amount,
  disabled,
  disableMessage,
  ...props
}: AddButtonProps) => {
  return (
    <CurvedButton
      {...props}
      className={`relative text-white flex items-center justify-center gap-3 w-fit ${
        disabled
          ? "bg-light_gray_bg dark:bg-light_gray_bg/30 cursor-not-allowed text-white/60"
          : bgColor
          ? bgColor
          : "dark:bg-black bg-grey_icon"
      }
      `}
      py={"2"}
      disabled={disabled}
      title={`${disabled ? "max number reached" : ""}`}
    >
      {Boolean(amount) && (
        <div className="absolute flex justify-center items-center top-0 right-0 -translate-y-[50%] translate-x-[30%] text-white bg-banner_purple min-w-[20px] rounded-[50%] aspect-square text-xs">
          {amount}
        </div>
      )}

      <div className="flex gap-2">{children}</div>
      <Add />
    </CurvedButton>
  );
};

export default AddButton;
