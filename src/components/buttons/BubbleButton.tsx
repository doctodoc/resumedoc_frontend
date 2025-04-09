import { ReactNode } from "react";
import RoundedButton from "./RoundedButton";
import { Close, DeleteOutline } from "@mui/icons-material";
import { secBgColor } from "@/assets/css/tailwindcss";

type BubbleButtonPropType = {
  children: ReactNode[] | ReactNode | string;
  pop: (id: string) => void;
  id: string;
  className?: string;
  onClick?: (T?: any) => void;
};

const BubbleButton = ({
  children,
  pop,
  id,
  className,
  onClick,
}: BubbleButtonPropType) => {
  return (
    <div className={`rounded-full ${className} w-fit flex gap-2 items-center ${secBgColor}`}>
      <button
        className={`flex-1 py-1 rounded-l-full px-2 text-sm capitalize hover:text-primary flex items-center`}
        onClick={onClick}
      >
        {children}
      </button>
      <button onClick={() => pop(id)} className="px-2 hover:text-red-400 w-fit flex items-center">
        <DeleteOutline sx={{ fontSize: 18 }} />
      </button>
    </div>
  );
};

export default BubbleButton;
