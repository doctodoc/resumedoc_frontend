"use client";

/**
 * this component is just like any other input component with
 * a title tage hooked at the top left when focused.
 */

import { InputFieldPropsType } from "@/shared/types/componentTypes";
import { Close } from "@mui/icons-material";
import classNames from "classnames";
import React, { useEffect, useState } from "react";

const InputWithTag = ({
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
  ...props
}: InputFieldPropsType) => {
  const [isActive, setIsActive] = useState(false); //tracks input cursor to apply changes

  const [inputVal, setInputVal] = useState(value);

  const clearInput = () => {
    setInputVal("");
  };

  useEffect(() => {
    setInputVal(value);
  }, [value]);

  return (
    <div className={` flex flex-col gap-2 md:gap-3 ${containerClass}`}>
      <section
        className={`relative dark:transparent flex flex-col gap-2 rounded-md border-[1.3px] border-solid border-input_border_grey dark:border-input_border_grey/60 py-2 }`}
      >
        <div
          className={classNames(
            `flex w-full justify-between items-center rounded-md ${
              iconPosition === "right" ? "flex-row-reverse" : ""
            }
          ${className} dark:transparent px-2 dark:border-none w-full dark:placeholder:text-gray-500/[.5] placeholder:text-base
          `
            // {
            //   "border-[1.3px] border-solid border-input_border_grey":
            //     isOutlined,
            // }
          )}
        >
          {isActive && (
            <div className="absolute top-0 bg-transparent -translate-y-[50%] left-2">
              <p className="text-sm text-light_gray_bg">{title}</p>
            </div>
          )}

          {Icon && <Icon />}

          <input
            {...props}
            name={id}
            id={id}
            className={classNames(
              ` bg-inherit flex-1 dark:placeholder:text-input_border_grey/55 dark:text-dark_primary_text placeholder:text-base ${
                isActive && "placeholder:text-transparent"
              } outline-none rounded-md font-light`
            )}
            type={`${type ? type : "text"}`}
            placeholder={placeholder}
            onChange={isIdle ? () => {} : handleChange}
            value={value}
            disabled={isIdle}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
          />

          <button
            onClick={clearInput}
            className="text-grey_icon/60 dark:text-dark_primary_text/60"
          >
            <Close sx={{ fontSize: 18 }} />
          </button>
        </div>
      </section>
    </div>
  );
};
export default InputWithTag;
