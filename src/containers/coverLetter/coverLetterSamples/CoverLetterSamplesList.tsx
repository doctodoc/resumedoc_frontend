import React from "react";
import CoverLetterSampleCard from "./CoverLetterSampleCard";

const CoverLetterSamples = () => {
  return (
    <div>
      <main className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4 h-full justify-center items-center">
        <CoverLetterSampleCard />
        <CoverLetterSampleCard />
        <CoverLetterSampleCard />
        <CoverLetterSampleCard />
        <CoverLetterSampleCard />
        <CoverLetterSampleCard />
        <CoverLetterSampleCard />
        <CoverLetterSampleCard />
      </main>
    </div>
  );
};

export default CoverLetterSamples;
