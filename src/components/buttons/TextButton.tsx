"use client"

import Link from "next/link";
import React, { ReactElement } from "react";
import Button, { GenericButtonProps } from "./Button";

interface Props extends GenericButtonProps {
  icon?: string;
};

// Button as plain text
const TextButton = ({ children, icon, onClick, className }: Props) => {
  return (
    <Button className={`${className}`} onClick={onClick}>
      {children}
      {icon && icon}
    </Button>
  );
};

export default TextButton;
