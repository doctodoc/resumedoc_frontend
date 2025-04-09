import React from "react";
import Button, { GenericButtonProps } from "./Button";
import { secTextColor } from "@/assets/css/tailwindcss";

interface Props extends GenericButtonProps {
  children: string;
  active: boolean;
}

const TabButton = ({ children, active, ...props }: Props) => {
  return (
    <Button
      className={`${active ? "" : ""} flex flex-col gap-[1px] ${secTextColor}`}
      {...props}
    >
      <p>{children}</p>
      <div
        className={`h-[3px] w-[70%] bg-primary rounded-full ${
          active ? "flex" : "hidden"
        }`}
      ></div>
    </Button>
  );
};

export default TabButton;
