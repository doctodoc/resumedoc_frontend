"use client";
import React from "react";
import Button, { GenericButtonProps } from "./Button";
import cx from "classnames";

interface Props extends GenericButtonProps {}

const RoundedButton = ({
  className,
  children,
  px,
  py,
  onClick,
  ...props
}: Props) => {
  return (
    <Button
      className={cx(`rounded-full ${className}`, {
        "px-6": !Boolean(px),
        [`px-${String(px).trim()}`]: Boolean(String(px).trim()),
        "py-4": !Boolean(py),
        [`py-${String(py).trim()}`]: Boolean(String(py).trim()),
      })}
      onClick={onClick}
      {...props}
    
    >
      {children}
    </Button>
  );
};

export default RoundedButton;
