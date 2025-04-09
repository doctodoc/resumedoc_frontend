"use client";

import TitleCenteredSection from "@/components/sections/TitleSection";
import React from "react";
import ResumeHeader from "../resumeSections/ResumeHeader";
import ResumeSummary from "../resumeSections/ResumeSummary";
import ResumeExperience from "../resumeSections/resumeExperience/ResumeExperience";
import ResumeEducation from "../resumeSections/ResumeEducation";
import ResumeCert from "../resumeSections/ResumeCert";
import ResumeAwards from "../resumeSections/ResumeAwards";
import { Delete, Settings } from "@mui/icons-material";
import CurvedButton from "@/components/buttons/CurvedButton";
import {
  gradientGreenToBlue,
  pryBgColor,
  pryTextColor,
} from "@/assets/css/tailwindcss";
import GenerateResumeModal from "@/containers/modals/actionModals/GenerateResumeModal";
import { useDisclosure } from "@/components/modal/useDisclosure";
import SaveResumeBioModal from "@/containers/modals/actionModals/SaveResumeBioModal";
import ClearResumeEntriesModal from "@/containers/modals/warningModals/ClearResumeEntriesModal";
import { Form, Formik } from "formik";
import ContactInfo from "../resumeSections/ContactInfo";
import ResumeSkills from "../resumeSections/ResumeSkills";
import { useAppSelector } from "@/lib/hooks/globalHooks";
import { selectResumeForm } from "@/api/slices/resume/resumeFormData/slice";
import { ResumeFormCompType } from "@/shared/types/componentTypes";

const BuldResumeFormSection = () => {
  const resumeData: ResumeFormCompType = useAppSelector(selectResumeForm);
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
    <div className="flex-1 w-full h-full px-5 flex flex-col gap-3 relative overflow-y-scroll">
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

      <header
        className={`flex flex-1 justify-between mb-3 sticky top-0 z-[5] ${pryBgColor} py-3 xl:py-4 shadow-sm shadow-light_gray_bg/10`}
      >
        <h1
          className={"font-semibold dark:text-dark_primary_text text-[1.12rem]"}
        >
          Build A Resume
        </h1>

        <div className=" flex gap-3 text-sm items-center">
          <SaveResume onClick={openSaveResumeBioModal} />
          <GenerateResume onClick={openGenerateResumeModal} />

          {/* <button className="text-grey_icon">
            <Settings />
          </button> */}
        </div>
      </header>

      <section className="w-full flex justify-between h-full ">
        <h2 className="text-secondary_text dark:text-dark_secondary_text">
          Fill out the sections and see changes on the resume
        </h2>

        <button
          className={"text-red-400 flex gap-2 text-sm items-center"}
          onClick={openClearResumeEntries}
        >
          <p>Clear</p>
          <Delete />
        </button>
      </section>

      <main className="h-[90%]">
        <Formik
          initialValues={resumeData}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form
              className="flex flex-col gap-6 xl:gap-10"
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <TitleCenteredSection title="Header" withLine>
                <ResumeHeader />
              </TitleCenteredSection>

              <TitleCenteredSection title="Contact Information" withLine>
                <ContactInfo
                  setFieldValue={setFieldValue}
                  formValues={values}
                />
              </TitleCenteredSection>

              <TitleCenteredSection title="Summary" withLine>
                <ResumeSummary />
              </TitleCenteredSection>

              <TitleCenteredSection title="Experience" withLine>
                <ResumeExperience
                  formValues={values}
                  setFieldValue={setFieldValue}
                />
              </TitleCenteredSection>

              <TitleCenteredSection title="Skills" withLine>
                <ResumeSkills formValues={values} />
              </TitleCenteredSection>

              <TitleCenteredSection title="Education" withLine>
                <ResumeEducation formValues={values} />
              </TitleCenteredSection>

              <TitleCenteredSection title="Certificate" withLine>
                <ResumeCert formValues={values} />
              </TitleCenteredSection>

              <TitleCenteredSection title="Awards" withLine>
                <ResumeAwards formValues={values} />
              </TitleCenteredSection>
            </Form>
          )}
        </Formik>
      </main>

      <section className="w-full flex gap-5 items-center justify-center mt-10">
        {/* <GenerateResume onClick={openGenerateResumeModal} />
        <SaveResume onClick={openSaveResumeBioModal} /> */}
      </section>
    </div>
  );
};

const GenerateResume = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className={`text-banner_purple font-semibold text-base`}
      onClick={onClick}
    >
      Download
    </button>
  );
};

const SaveResume = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className={`${pryTextColor} font-semibold text-base`}
      onClick={onClick}
    >
      Save
    </button>
  );
};
export default BuldResumeFormSection;
