import React, { ReactElement } from "react";

type Props = {
  icon: () => ReactElement;
  title: string;
  description: string;
};

// Feature with Icon
const IconFeature = ({ icon: Icon, title, description }: Props) => {
  return (
    <div>
      <section className="max-w-[400px] flex flex-col gap-2">
        <Icon />
        <h3 className="font-semibold text-base dark:text-dark_primary_text">
          {title}
        </h3>
        <p className="dark:text-dark_secondary_text">{description}</p>
      </section>
    </div>
  );
};

export default IconFeature;
