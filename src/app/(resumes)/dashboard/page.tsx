"use client";

import { universalPaddingX, universalPaddingY } from "@/assets/css/tailwindcss";
import CreatedResumes from "@/containers/resume/dashboard/resumeAndEntries/CreatedResumes";
import SavedBios from "@/containers/resume/dashboard/coverLetter/CoverLetter";
import Subscriptions from "@/containers/resume/dashboard/subscription/Subscriptions";
import React from "react";

const Dashboard = () => {
  return (
    <div
      className={`${universalPaddingX} ${universalPaddingY} flex flex-col items-center w-full dark:text-dark_primary_text`}
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

export default Dashboard;
