import { TextareaAutosize } from "@mui/material";
import React from "react";

const TextAreaCustom = ({ ...props }) => {
  return (
    <TextareaAutosize
      className="outline-none w-full max-w-[600px] border-[1.3px] border-solid border-input_border_grey dark:border-input_border_grey/60 p-2 dark:placeholder:text-input_border_grey/40 placeholder:text-base bg-transparent"
      {...props}
    />
  );
};

export default TextAreaCustom;
