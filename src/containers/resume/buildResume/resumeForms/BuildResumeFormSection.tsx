"use client";

import TitleCenteredSection from "@/components/sections/TitleCenteredSection";
import React from "react";
import ResumeHeader from "../resumeSections/ResumeHeader";
import ResumeSummary from "../resumeSections/ResumeSummary";
import ResumeExperience from "../resumeSections/ResumeExperience";
import ResumeEducation from "../resumeSections/ResumeEducation";
import ResumeCert from "../resumeSections/ResumeCert";
import ResumeAwards from "../resumeSections/ResumeAwards";
import { Delete, Settings } from "@mui/icons-material";
import CurvedButton from "@/components/buttons/CurvedButton";
import { gradientGreenToBlue } from "@/assets/css/tailwindcss";
import GenerateResumeModal from "@/containers/modals/actionModals/GenerateResumeModal";
import { useDisclosure } from "@/components/modal/useDisclosure";
import SaveResumeBioModal from "@/containers/modals/actionModals/SaveResumeBioModal";
import ClearResumeEntriesModal from "@/containers/modals/warningModals/ClearResumeEntriesModal";
import { Form, Formik } from "formik";
import ContactInfo from "../resumeSections/ContactInfo";

const BuldResumeFormSection = () => {
  const {
    isOpen: isOpenGenerateResumeModal,
    close: closeGenerateResumeModal,
    open: openGenerateResumeModal,
  } = useDisclosure();

  const {
    isOpen: isOpenSaveResumeBioModal,
    close: closeSaveResumeBioModal,
    open: openSaveResumeBioModal,
  } = useDisclosure();

  const {
    isOpen: isOpenClearResumeEntries,
    close: closeClearResumeEntries,
    open: openClearResumeEntries,
  } = useDisclosure();

  const clearAllEntries = () => {};

  return (
    <div className="flex-1 w-full px-5 flex flex-col gap-3">
      {/* MODALS */}
      <GenerateResumeModal
        isOpen={isOpenGenerateResumeModal}
        close={closeGenerateResumeModal}
      />

      <SaveResumeBioModal
        isOpen={isOpenSaveResumeBioModal}
        close={closeSaveResumeBioModal}
      />

      <ClearResumeEntriesModal
        close={closeClearResumeEntries}
        isOpen={isOpenClearResumeEntries}
        proceed={clearAllEntries}
      />

      <header className="flex flex-1 justify-between mb-3">
        <h1 className={"font-medium dark:text-dark_primary_text"}>
          Build A Resume
        </h1>

        <div className=" flex gap-3 text-sm items-center">
          <CurvedButton
            className={`bg-primary text-white ${gradientGreenToBlue}`}
            py={"1"}
            onClick={openGenerateResumeModal}
          >
            Generate Resume
          </CurvedButton>

          <CurvedButton
            className="bg-black text-white"
            py={"1"}
            onClick={openSaveResumeBioModal}
          >
            Save as Resume Bio
          </CurvedButton>

          {/* <button className="text-grey_icon">
            <Settings />
          </button> */}
        </div>
      </header>

      <section className="w-full flex justify-between">
        <h2 className="text-secondary_text dark:text-dark_secondary_text">
          Fill out the sections and see changes on the resume
        </h2>

        <button
          className={"text-red-400 flex gap-2 text-sm items-center"}
          onClick={openClearResumeEntries}
        >
          <p>Clear Entries</p>
          <Delete />
        </button>
      </section>

      <main>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            jobTitle: "",
          }}
          onSubmit={() => {}}
        >
          <Form className="flex flex-col gap-6 xl:gap-10">
            <TitleCenteredSection title="Header" withLine>
              <ResumeHeader />
            </TitleCenteredSection>

            <TitleCenteredSection title="Contact Information" withLine>
              <ContactInfo />
            </TitleCenteredSection>

            <TitleCenteredSection title="Summary" withLine>
              <ResumeSummary />
            </TitleCenteredSection>

            <TitleCenteredSection title="Experience" withLine>
              <ResumeExperience />
            </TitleCenteredSection>

            <TitleCenteredSection title="Education" withLine>
              <ResumeEducation />
            </TitleCenteredSection>

            <TitleCenteredSection title="Certificate" withLine>
              <ResumeCert />
            </TitleCenteredSection>

            <TitleCenteredSection title="Awards" withLine>
              <ResumeAwards />
            </TitleCenteredSection>
          </Form>
        </Formik>
      </main>

      <section className="w-full flex gap-5 items-center justify-center mt-10">
        <CurvedButton
          className={`bg-primary text-white ${gradientGreenToBlue}`}
          py={"2"}
          onClick={openGenerateResumeModal}
        >
          Generate Resume
        </CurvedButton>
        <CurvedButton
          className="bg-black text-white"
          py={"2"}
          onClick={openSaveResumeBioModal}
        >
          Save as Resume Bio
        </CurvedButton>
      </section>
    </div>
  );
};

export default BuldResumeFormSection;
