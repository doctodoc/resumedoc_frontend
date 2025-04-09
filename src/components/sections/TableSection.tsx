import React, { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const TableSection = ({ title, children }: Props) => {
  return (
    <div className="flex gap-2 items-start">
      <p className="font-semibold">{title}</p>
      <p>{"-"}</p>
      <p className="font-[400]">{children}</p>
    </div>
  );
};

export default TableSection;
