import { greenBorder, lightCardBg } from "@/assets/css/tailwindcss";
import React from "react";

type Props = {
  id?: string;
  resumeType?: "job" | "school";
  templateSelected?: string;
  companyName?: string;
  schoolName?: string;
  jobTitle?: string;
  dateUpdated?: string;
  professionalTitle?: string;
};


const CoverLetterCard = ({
  // resumeType,
  companyName,
  jobTitle,
  dateUpdated,
}: Props) => {
  return (
    <div
      className={`flex flex-col gap-4 ${greenBorder} p-3 ${lightCardBg} w-full dark:text-dark_secondary_text `}
    >
      <section className="flex-1">
        <p className="text-ellipsis truncate dark:text-dark_primary_text">
          {jobTitle}
        </p>
        <p className="truncate text-ellipsis">
          {" "}
          <span className="text-secondary_text dark:text-dark_secondary_text">
            @
          </span>
          {companyName}
        </p>
      </section>

      <section className="">
        <div className="text-sm text-secondary_text dark:text-dark_secondary_text">
          <p>{dateUpdated}</p>
          {/* <p>12:30:45</p> */}
        </div>
      </section>
    </div>
  );
};

export default CoverLetterCard;
