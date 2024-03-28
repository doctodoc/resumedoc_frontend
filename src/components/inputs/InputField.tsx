"use client";

import { InputFieldPropsType } from "@/shared/types/componentTypes";
import { Close } from "@mui/icons-material";
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
    // leftIcon: LeftIcon,
    icon: Icon,
    iconPosition,
    containerClass,
    autoFocus,

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
    <div className={` flex flex-col gap-2 md:gap-3 ${containerClass}`}>
      <header>
        {title && (
          <h2 className="font-medium text-base dark:text-dark_primary_text dark:font-normal">
            {title}
          </h2>
        )}
      </header>
      <section className="relative  flex flex-col gap-2 ">
        <div
          className={classNames(
            `relative flex w-full justify-between items-center rounded-md ${
              iconPosition === "right" ? "flex-row-reverse" : ""
            }
        ${className} dark:bg-transparent bg-white w-full py-2 dark:placeholder:text-input_border_grey/40 placeholder:text-base
        `,
            {
              "border-[1.3px] border-solid border-input_border_grey dark:border-input_border_grey/60 ":
                isOutlined,
            }
          )}
        >
          {Icon && <Icon />}
          <input
            {...props}
            name={id}
            id={id}
            className={classNames(
              ` bg-transparent px-2 flex-1 dark:placeholder:text-gray-500/[20] placeholder:text-base rounded-md`
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
            className="text-grey_icon/60 dark:text-dark_primary_text/60"
          >
            <Close />
          </button>
        </div>
      </section>
    </div>
  );
};

export default React.forwardRef(InputField);
