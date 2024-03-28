import React from 'react'
import Button, { GenericButtonProps } from "./Button";

interface Props extends GenericButtonProps {}

const EdgeButton = ({ className, children }: Props) => {
  return (
    <Button
      className={`border-[1px] px-3 py-2 text-base font-normal ${className}`}
    >
      {children}
    </Button>
  )
}

export default EdgeButton