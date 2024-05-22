import { lightCardBg } from "@/assets/css/tailwindcss";
import React from "react";

const CoverLetterSampleCard = () => {
  return (
    <main className="w-full flex items-center justify-center ">
      <div className={`flex flex-col gap-3 ${lightCardBg} w-full max-w-[300px]`}>
        <section className=" aspect-[1] bg-slate-900 p-2"></section>
        <section className="p-3 flex flex-col justify-between  gap-4">
          <div className="flex-1">
            <p className="text-ellipsis truncate font-medium">
              Software Engineering Manager
            </p>
            <p className="truncate text-ellipsis">
              {" "}
              <span className="text-secondary_text dark:text-dark_secondary_text">
                @
              </span>
              Meta
            </p>
          </div>

          <div className="">
            <div className="text-sm text-secondary_text dark:text-dark_secondary_text">
              <p>Aug 7, 2024</p>
              <p>12:30:45</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CoverLetterSampleCard;
