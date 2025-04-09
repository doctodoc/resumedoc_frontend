import React, { ReactElement, ReactNode } from "react";
import cx from "classnames";

type Props = {
  children: string | ReactNode | Array<ReactNode>;
  title?: string | ReactElement;
  className?: string;
};

const WidgetCard = ({ children, title, className }: Props) => {
  return (
    <section
      className={cx(
        `overflow-y-hidden flex flex-col min-h-[300px] bg-light_gray_widget dark:bg-secondary_dark rounded-[1.5rem] flex-1 px-3 py-3 dark:border-[0.8px] dark:border-light_gray_widget/15 ${className}`
      )}
    >
      <header>
        <div className={"font-medium dark:text-dark_primary_text"}>{title}</div>
      </header>
      <div className="flex flex-col flex-1 ">{children}</div>
    </section>
  );
};

export default WidgetCard;
