import { secTextColor } from "@/assets/css/tailwindcss";
import React, { ReactNode } from "react";

type Props = {
  withLine?: boolean;
  title: string;
  children: string | ReactNode | Array<ReactNode>;
  plain?: boolean;
  alignStart?: boolean;
  fontSize?: string;
  bigFont?: boolean;
  medFont?: boolean;
  description?: ReactNode;
};

const TitleSection = ({
  withLine,
  title,
  children,
  plain,
  alignStart,
  fontSize,
  bigFont,
  description,
  medFont,
}: Props) => {
  return (
    <div className="relative bg-inherit">
      <header className="w-full relative h-10 flex flex-col justify-center ">
        {withLine && !alignStart && (
          <div className="w-full  h-[1px] bg-light_border_color dark:bg-light_gray_widget/15"></div>
        )}
        <div
          className={`${
            alignStart
              ? "text-start"
              : "text-center top-[50%] px-4 -translate-y-[50%] left-[50%] -translate-x-[50%] absolute bg-white dark:bg-primary_dark"
          }  `}
        >
          <h1
            className={`font-medium  ${
              bigFont ? "text-xl xl:text-3xl" : "text-base"
            } 
            ${
              medFont ? "text-lg xl:text-xl" : "text-base"
            }
            ${plain ? `${secTextColor}` : "text-primary"} `}
            style={{ fontSize: fontSize }}
          >
            {title}
          </h1>
        </div>
      </header>
      <div className={`${bigFont ? 'mb-3' : ''}`}>{description}</div>
      <section className="relative overflow-auto flex-1 p-3">
        {children}
      </section>
    </div>
  );
};

export default TitleSection;
