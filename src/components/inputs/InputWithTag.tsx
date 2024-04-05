"use client";

import { InputFieldPropsType } from "@/shared/types/componentTypes";
import classNames from "classnames";
import React, { useState } from "react";

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

  return (
    <div className={` flex flex-col gap-2 md:gap-3 ${containerClass} bg-inherit`}>
      <section
        className={`relative dark:transparent flex flex-col gap-2 border-[1.3px] border-solid border-input_border_grey dark:border-input_border_grey/60 py-2 bg-inherit`}
      >
        <div
          className={classNames(
            `bg-inherit flex w-full justify-between items-center rounded-md ${
              iconPosition === "right" ? "flex-row-reverse" : ""
            }
          ${className} dark:transparent dark:border-none w-full  dark:placeholder:text-gray-500/[.5] placeholder:text-base
          `
            // {
            //   "border-[1.3px] border-solid border-input_border_grey":
            //     isOutlined,
            // }
          )}
        >
          {/* Title tag */}
          {isActive && (
            <div className="absolute top-0 bg-inherit -translate-y-[50%] left-2 ">
              <p className="text-sm text-light_gray_bg bg-inherit">{title}</p>
            </div>
          )}

          {Icon && <Icon />}

          <input
            {...props}
            name={id}
            id={id}
            className={classNames(
              ` bg-inherit px-2 flex-1 dark:placeholder:text-input_border_grey/40 placeholder:text-base ${
                isActive && "placeholder:text-transparent"
              } outline-none rounded-md`
            )}
            type={`${type ? type : "text"}`}
            placeholder={placeholder}
            onChange={isIdle ? () => {} : handleChange}
            value={value}
            disabled={isIdle}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
          />
        </div>
      </section>
    </div>
  );
};
export default InputWithTag;
