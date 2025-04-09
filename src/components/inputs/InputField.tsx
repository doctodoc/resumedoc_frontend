"use client";

import { InputFieldPropsType } from "@/shared/types/componentTypes";
import { BorderColor, Close } from "@mui/icons-material";
import classNames from "classnames";
import React, { useCallback, useEffect, useState } from "react";

const InputField = (
  {
    placeholder,
    title,
    className,
    type,
    id,
    value,
    handleChange,
    // error,
    isIdle,
    isOutlined,
    infoModalContent,
    iconClass,
    // leftIcon: LeftIcon,
    icon: Icon,
    iconPosition,
    containerClass,
    autoFocus,
    handleIconClick,
    borderColor,
    ...props
  }: InputFieldPropsType,
  ref?: React.LegacyRef<HTMLInputElement> | undefined
) => {
  const [inputVal, setInputVal] = useState(value);

  const clearInput = () => {
    setInputVal(""); 
  };

  useEffect(() => {
    setInputVal(value);
  }, [value]);

  return (
    <div className={`w-full flex flex-col ${containerClass}`}>
      <header>
        {title && (
          <h2 className="font-medium mb-2 md:mb-3 text-base dark:text-dark_primary_text dark:font-normal">
            {title}
          </h2>
        )}
      </header>
      <div
        className={classNames(
          `relative flex w-full gap-2 justify-between items-center rounded-md ${
            iconPosition === "right" ? "flex-row-reverse" : ""
          }
        ${className} dark:bg-transparent bg-white w-full px-2 dark:placeholder:text-input_border_grey/40 placeholder:text-base
          ${borderColor ? borderColor : ""}
        `,
          {
            "border-[1.3px] border-solid border-input_border_grey dark:border-input_border_grey/60 ":
              isOutlined && !borderColor,
          }
        )}
      >
        {handleIconClick ? (
          <button
            className={`text-grey_icon/60 dark:text-dark_primary_text/60 ${iconClass}`}
            onClick={handleIconClick}
          >
            {Icon && <Icon />}
          </button>
        ) : (
          <div
            className={`text-grey_icon/60 dark:text-dark_primary_text/60 ${iconClass}`}
          >
            {Icon && <Icon />}
          </div>
        )}

        <input
          {...props}
          name={id}
          id={id}
          className={classNames(
            `bg-transparent flex-1 py-2 dark:placeholder:text-input_border_grey/55 font-light placeholder:text-base dark:text-dark_primary_text`
          )}
          type={`${type ? type : "text"}`}
          placeholder={placeholder}
          onChange={isIdle ? () => {} : handleChange}
          value={inputVal}
          disabled={isIdle}
          autoFocus={autoFocus}
          ref={ref}
        />
        <button
          onClick={clearInput}
          className="text-grey_icon/60 dark:text-dark_primary_text/60 "
        >
          <Close sx={{ fontSize: 18 }} />
        </button>
      </div>
    </div>
  );
};

export default React.forwardRef(InputField);
