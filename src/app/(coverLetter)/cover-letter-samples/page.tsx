import { universalPaddingY } from "@/assets/css/tailwindcss";
import CoverLetterSamples from "@/containers/coverLetter/coverLetterSamples/CoverLetterSamplesList";
import React from "react";

const page = () => {
  return (
    <div className={`w-full flex justify-center ${universalPaddingY}`}>
      <main className={"max-w-[1000px] w-full"}>
        <CoverLetterSamples />
      </main>
    </div>
  );
};

export default page;
