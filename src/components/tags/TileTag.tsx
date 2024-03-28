"use client";

import { CloseIcon } from "@/assets/svg";
import React from "react";

type Props = {
  className?: string;
  value: string;
  id: string;
  handleRemove: (id: string) => void;
};

const TileTag = ({ className, value, handleRemove, id }: Props) => {
  return (
    <div
      className={`${className} flex gap-3 dark:text-dark_primary_text bg-primary/20 border-[1.2px] border-primary rounded-full px-3 py-1 `}
    >
      <p className="text-sm">{value}</p>
      <button onClick={() => handleRemove(id)}>
        <CloseIcon color="#0DD354" />
      </button>
    </div>
  );
};

export default TileTag;
