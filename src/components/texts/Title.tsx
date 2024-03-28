import React from "react";

type Props = {
  children: string;
  className?: string;
  isSub?: boolean;
};
const Title = ({ children, className, isSub }: Props) => {
  return (
    <h1
      className={`${className} dark:text-dark_primary_text ${
        isSub ? "text-base font-medium" : "text-lg font-semibold"
      }`}
    >
      {children}
    </h1>
  );
};

export default Title;
