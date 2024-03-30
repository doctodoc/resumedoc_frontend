"use client";

import { universalPaddingX, universalPaddingY } from "@/assets/css/tailwindcss";
import CreatedResumes from "@/containers/dashboard/resumeAndEntries/CreatedResumes";
import CoverLetter from "@/containers/dashboard/coverLetter/CoverLetterList";
import Subscriptions from "@/containers/dashboard/subscription/Subscriptions";
import React from "react";

const Dashboard = () => {
  return (
    <div
      className={`${universalPaddingX} ${universalPaddingY} flex flex-col gap-6 items-center w-full dark:text-dark_primary_text`}
    >
      <main className="max-w-[1400px] w-full flex flex-col gap-10">
        <section>
          <CreatedResumes resumeList={[]} />
        </section>

        <section>
          <CoverLetter />
        </section>

        <section>
          <Subscriptions />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
