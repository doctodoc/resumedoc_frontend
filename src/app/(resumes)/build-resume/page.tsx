import BuildResumeCrumbs from "@/containers/resume/buildResume/resumeCrumbs/BuildResumeCrumbs";
import BuildResumeTemplate from "@/containers/resume/buildResume/resumeTemplate/BuildResumeTemplate";
import BuldResumeFormSection from "@/containers/resume/buildResume/resumeForms/BuildResumeFormSection";
import React from "react";
import { useDisclosure } from "@/components/modal/useDisclosure";

const page = () => {
  return (
    <div
      className={`dark:bg-primary_dark flex flex-row gap-4 flex-1 h-full relative mt-8 bg-red`}
    >
      <section className="hidden xl:flex w-[25%] sticky top-24 h-fit ">
        <BuildResumeCrumbs />
      </section>

      <main className="flex-1">
        <BuldResumeFormSection />
      </main>

      <section className="hidden md:flex w-[25%] sticky top-24 h-fit ">
        <BuildResumeTemplate />
      </section>
    </div>
  );
};

export default page;
