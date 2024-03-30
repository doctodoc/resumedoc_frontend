import { greenBorder, lightCardBg } from "@/assets/css/tailwindcss";
import React from "react";

const CoverLetterCard = () => {
  return (
    <div
      className={`flex flex-col gap-4 ${greenBorder} p-3 ${lightCardBg} w-60`}
    >
      <section className="flex-1">
        <p className="text-ellipsis truncate">Software Engineerin Manager</p>
        <p className="truncate text-ellipsis">
          {" "}
          <span className="text-secondary_text dark:text-dark_secondary_text">
            @
          </span>
          Meta
        </p>
      </section>

      <section className="">
        <div className="text-sm text-secondary_text dark:text-dark_secondary_text">
          <p>Aug 7, 2024</p>
          <p>12:30:45</p>
        </div>
      </section>
    </div>
  );
};

export default CoverLetterCard;
