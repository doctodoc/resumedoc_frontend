import { gradientGreenToBlue } from "@/assets/css/tailwindcss";
import CurvedButton from "@/components/buttons/CurvedButton";
import InputWithTag from "@/components/inputs/InputWithTag";
import TextAreaCustom from "@/components/inputs/TextAreaCustom";
import { Edit } from "@mui/icons-material";
import React from "react";

const CreateCoverLetter = () => {
  return (
    <div className="w-full flex flex-col items-center dark:text-dark_secondary_text">
      <div className="max-w-[900px] w-full flex flex-col gap-4">
        <h1>Create Cover Letter</h1>

        <main className="flex flex-col gap-10">
          <section>
            <div className="flex gap-6 w-full flex-wrap">
              <InputWithTag
                placeholder="Job Title"
                id="job_title_resume"
                value={""}
                containerClass="flex-1 min-w-[200px] "
                title="Job Title"
              />
              <InputWithTag
                placeholder="Company"
                id="company_resume"
                value={""}
                containerClass="flex-1 min-w-[200px] "
                title="Company"
              />
            </div>
          </section>

          <section className="flex items-end gap-3">
            <TextAreaCustom
              value={""}
              placeholder="Write a few things about you or your experience, we will generate the rest..."
              minRows={5}
            />
            <CurvedButton className={`${gradientGreenToBlue} text-white`}>
              Generate With AI
            </CurvedButton>
          </section>

          <section className="w-full flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <p>Your Cover Letter Will Appear Here</p>
              <CurvedButton
                className="flex gap-3 items-center bg-primary text-white"
                py={1}
              >
                <p>Edit Cover Letter</p>
                <Edit />
              </CurvedButton>
            </div>

            <div className="min-w-[400px] w-full aspect-square bg-slate-600"></div>
          </section>
        </main>

        <section className="flex items-center justify-center w-full gap-7">
          <CurvedButton
            className={`bg-primary text-white`}
            py={"2"}
            // onClick={openGenerateResumeModal}
          >
            <p>Save Cover Letter</p>
          </CurvedButton>
          <CurvedButton
            className="bg-black text-white"
            py={"2"}
            // onClick={openSaveResumeBioModal}
          >
            <p>Download Cover Letter</p>
          </CurvedButton>
        </section>
      </div>
    </div>
  );
};

export default CreateCoverLetter;
