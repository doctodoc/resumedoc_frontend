"use client";

import { ContainerStylingPropsType } from "@/shared/types/componentTypes";
import React, { ClassAttributes, HTMLAttributes, ReactElement, ReactNode } from "react";

export interface GenericButtonProps
  extends ContainerStylingPropsType,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    ClassAttributes<HTMLButtonElement> {
  children?: any;
  icon?: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  props?: any;
}

const Button = ({
  children,
  className,
  px,
  py,
  onClick,
  type,
  ...props
}: GenericButtonProps) => {
  return (
    <button {...props} className={`${className}`} onClick={onClick} type={type?type: 'button'} >
      {children}
    </button>
  );
};

export default Button;
