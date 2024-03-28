"use client";

import { universalPaddingX, universalPaddingY } from "@/assets/css/tailwindcss";
import CreatedResumes from "@/containers/resume/myResume/CreatedResumes";
import SavedBios from "@/containers/resume/myResume/CoverLetter";
import Subscriptions from "@/containers/resume/myResume/Subscriptions";
import React from "react";

const MyResumePage = () => {
  return (
    <div
      className={`${universalPaddingX} ${universalPaddingY} flex flex-col items-center w-full`}
    >
      <main className="max-w-[1400px] w-full">
        <section>
          <CreatedResumes resumeList={[]} />
        </section>

        <section>
          <SavedBios />
        </section>

        <section>
          <Subscriptions />
        </section>
      </main>
    </div>
  );
};

export default MyResumePage;
