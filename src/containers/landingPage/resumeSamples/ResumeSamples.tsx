import OutlinedButton from "@/components/buttons/OutlinedButton";
import React from "react";
import Sample from "./Sample";
import { universalPaddingX } from "@/assets/css/tailwindcss";

const ResumeSamples = () => {
  const samples = ["", "", "", "", "", ""];
  return (
    <div className={`flex flex-col gap-3 ${universalPaddingX}`}>
      <h3 className="dark:text-dark_primary_text text-center text-lg font-medium">
        {"Check out our highly rated Resumes accepted into top companies"}
      </h3>
      <div className="flex justify-center gap-7 h-[13rem] overflow-x-hidden">
        {samples.map((sample, i) => (
          <Sample key={i} />
        ))}
      </div>
      <section className="w-full flex justify-center">
        <button className="border-primary text-primary text-lg font-semibold">
          {"View All Samples"}
        </button>
      </section>
    </div>
  );
};

export default ResumeSamples;
