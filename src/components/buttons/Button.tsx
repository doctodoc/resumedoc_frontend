"use client";

import { ContainerStylingPropsType } from "@/shared/types/componentTypes";
import React, { ClassAttributes, HTMLAttributes, ReactElement } from "react";

export interface GenericButtonProps
  extends ContainerStylingPropsType,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    ClassAttributes<HTMLButtonElement> {
  children: any;
  icon?: string;
  className?: string;
  onClick?: () => void;
  props?: any;
}

const Button = ({
  children,
  className,
  px,
  py,
  onClick,
  ...props
}: GenericButtonProps) => {
  return (
    <button className={`${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
