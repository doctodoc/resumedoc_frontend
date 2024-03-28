import React, { ReactElement } from "react";

type Props = {
  withLine?: boolean;
  title: string;
  children: string | ReactElement;
};

const TitleCenteredSection = ({ withLine, title, children }: Props) => {
  return (
    <div className="relative bg-white dark:bg-primary_dark">
      <header className="w-full relative h-10 flex flex-col justify-center">
        {withLine && (
          <div className="w-full  h-[1px] bg-light_border_color"></div>
        )}
        <div className="text-center top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] absolute bg-white dark:bg-primary_dark p-2 px-4">
          <h1 className="font-semibold dark:text-dark_primary_text">{title}</h1>
        </div>
      </header>
      <section className="relative">{children}</section>
    </div>
  );
};

export default TitleCenteredSection;
