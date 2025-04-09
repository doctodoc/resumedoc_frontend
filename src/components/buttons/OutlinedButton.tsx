import React from "react";
import Button, { GenericButtonProps } from "./Button";
import cx from "classnames";

interface Props extends GenericButtonProps {
  outlineColor?: string;
}

const OutlinedButton = ({
  className,
  children,
  onClick,
  outlineColor,
  px,
  py,
  ...props
}: Props) => {
  return (
    <Button
      className={cx(`border-[1.3px] text-base font-normal ${className}`, {
        "px-6": !Boolean(px),
        [`px-${String(px).trim()}`]: Boolean(String(px).trim()),
        "py-4": !Boolean(py),
        [`py-${String(py).trim()}`]: Boolean(String(py).trim()),
        [`border-[${outlineColor}]`]: Boolean(outlineColor),
      })}
      // style={{ padding }}
      onClick={onClick}
      // style={{borderColor:}}
      {...props}
    >
      {children}
    </Button>
  );
};

export default OutlinedButton;
