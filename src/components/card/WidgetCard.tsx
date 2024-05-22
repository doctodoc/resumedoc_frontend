import React, { ReactElement } from "react";

type Props = {
  children: string | ReactElement;
  title?: string | ReactElement;
  className?: string;
};
const WidgetCard = ({ children, title, className }: Props) => {
  return (
    <section
      className={`hidden md:flex flex-col md:max-w-[300px] xl:max-w-[400px] min-h-[300px] h-fit max-h-[550px] bg-light_gray_widget dark:bg-secondary_dark flex-1 px-3 py-3 dark:border-[0.8px] dark:border-light_gray_widget/15 ${className}`}
    >
      <header>
        <div className={"font-medium dark:text-dark_primary_text"}>{title}</div>
      </header>
      <div className="flex flex-col overflow-y-auto flex-1">{children}</div>
    </section>
  );
};

export default WidgetCard;
