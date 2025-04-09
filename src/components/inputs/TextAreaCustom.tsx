import { pryTextColor } from "@/assets/css/tailwindcss";
import { TextAreaPropTypes } from "@/shared/types/componentTypes";
import { Lock } from "@mui/icons-material";
import { TextareaAutosize } from "@mui/material";
import React from "react";

class TextAreaCustom extends React.Component<TextAreaPropTypes, {}> {
  constructor(props: TextAreaPropTypes) {
    super(props);
  }
  render() {
    const { onChange, className, isLocked, unLock, value, ...props } =
      this.props;

    const handleChange:
      | React.ChangeEventHandler<HTMLTextAreaElement>
      | undefined = (e) => {
      const { value } = e.target;
      if (onChange) onChange(value);
    };

    return isLocked ? (
      <div className="w-full flex flex-col gap-3">
        <div className={`w-full flex flex-col items-end gap-3`}>
          <button
            onClick={unLock}
            className={`flex gap-1 items-center text-primary/80 hover:text-primary `}
          >
            <p>EDIT</p>
            <Lock />
          </button>
        </div>
        <div
          className={`outline-none w-full min-h-[8rem] h-fit rounded-md bg-[#D2D2D2]/10 my-0 border-[1.3px]  border-solid border-input_border_grey dark:text-dark_primary_text dark:border-input_border_grey/60 p-2 dark:placeholder:text-input_border_grey/55 placeholder:text-base  font-light ${className}`}
        >
          {value}
        </div>
      </div>
    ) : (
      <TextareaAutosize
        {...props}
        className={`outline-none w-full rounded-md bg-transparent my-0 border-[1.3px] hover:border-primary focus:border-primary focus:border-[2px] border-solid border-input_border_grey dark:text-dark_primary_text dark:border-input_border_grey/60 p-2 dark:placeholder:text-input_border_grey/55 placeholder:text-base  font-light ${className}`}
        onChange={handleChange}
        value={value}
        // onFocus={}
      />
    );
  }
}

export default TextAreaCustom;
