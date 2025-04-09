import { universalPaddingX } from "@/assets/css/tailwindcss";
import React from "react";

const PainPointArea = () => {
  return (
    <div className={`w-full flex flex-col items-center justify-center ${universalPaddingX}`}>
      <div className="max-w-[800px] flex flex-col items-center justify-center gap-4">
        <h3 className="dark:text-dark_primary_text text-2xl sm:text-3xl text-center w-full font-medium">
          {
            "Did You know that about 70% of candidates get rejected based on their Resumes?, Crazy right?"
          }
        </h3>
        <p className="dark:text-dark_secondary_text text-center text-secondary_text w-full dark:font-normal font-medium text-base md:text-lg">{`Don’t let that scare you, We’ve created a platform where you can have access to the best Resources, Technologies and Professionals that can help you build the perfect resume to land that amazing position. 
  We realize that Resumes are the first impression you make to a recruiter and intend to leave a solid and positive impression.`}</p>
      </div>
    </div>
  );
};

export default PainPointArea;
