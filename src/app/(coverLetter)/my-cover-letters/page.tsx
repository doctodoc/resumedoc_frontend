import { universalPaddingY } from "@/assets/css/tailwindcss";
import MyCoverLetters from "@/containers/coverLetter/myCoverLetters/MyCoverLetters";
import React from "react";

const page = () => {
  return (
    <div className={`w-full flex justify-center ${universalPaddingY}`}>
      <main className={"max-w-[1000px] w-full"}>
        <MyCoverLetters />
      </main>
    </div>
  );
};

export default page;
