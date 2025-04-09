"use client";

import Link from "next/link";
import React, { ReactElement, ReactNode } from "react";
import Button, { GenericButtonProps } from "./Button";

interface Props extends GenericButtonProps {
  isActive?: boolean;
}

// Button as plain text
const TextButton = ({
  children,
  icon,
  onClick,
  className,
  isActive,
  ...props
}: Props) => {
  return (
    <Button
      {...props}
      className={`${className} ${isActive ? "font-bold" : ""} flex gap-3`}
      onClick={onClick}
    >
      {children}
      {icon && icon}
    </Button>
  );
};

export default TextButton;
