"use client";
import React from "react";
import Button, { GenericButtonProps } from "./Button";
import cx from "classnames";

interface Props extends GenericButtonProps {
  rounded?: boolean
}

const CurvedButton = ({rounded, className, children, px, py, onClick,...props }: Props) => {
  return (
    <Button
      {...props}
      className={cx(`${rounded ? 'rounded-full' : "rounded-md "} ${className}`, {
        "px-6": !Boolean(px),
        [`px-${String(px).trim()}`]: Boolean(String(px).trim()),
        "py-4": !Boolean(py),
        [`py-${String(py).trim()}`]: Boolean(String(py).trim()),
      })}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CurvedButton;
