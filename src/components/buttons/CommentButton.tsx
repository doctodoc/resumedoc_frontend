import React from "react";
import Button, { GenericButtonProps } from "./Button";
import { secTextColor } from "@/assets/css/tailwindcss";

interface Props extends GenericButtonProps {
  children: string;
  active: boolean;
  className: string;
}

const CommentButton = ({ children, active, className, ...props }: Props) => {
  return (
    <div className={`$`}>
      <Button
        {...props}
        className={`${
          active ? "" : ""
        } flex flex-col gap-[1px] rounded-es-[20%] ${className}`}
        // style={{}}
      >
        <p>{children}</p>
        {/* <div
                className={`h-[3px] w-[70%] bg-primary rounded-full ${
                active ? "flex" : "hidden"
                }`}
            ></div> */}
      </Button>
    </div>
  );
};

export default CommentButton;
