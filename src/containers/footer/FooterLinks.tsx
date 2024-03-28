import { footerLinksData } from "@/data/landingPageData/footerData";
import React from "react";

type Props = {
  category: string;
  links: Array<{ name: string; link?: string }>;
};

const FooterLinks = ({ category, links }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold text-base dark:text-dark_primary_text">
        {category}
      </h3>
      <section className="flex flex-col gap-3 md:gap-5 dark:text-dark_secondary_text">
        {links.map(({ name, link }) => (
          <p key={name} className="text-sm">
            {name}
          </p>
        ))}
      </section>
    </div>
  );
};

export default FooterLinks;
