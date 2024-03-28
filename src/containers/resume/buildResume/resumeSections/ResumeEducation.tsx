import CurvedButton from "@/components/buttons/CurvedButton";
import InputField from "@/components/inputs/InputField";
import InputWithTag from "@/components/inputs/InputWithTag";
import { Add } from "@mui/icons-material";
import { TextareaAutosize } from "@mui/material";
import React from "react";

const ResumeEducation = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <section className="w-full flex flex-col gap-3 bg-light_gray_widget dark:bg-secondary_dark/50 p-4">
        <div className="flex justify-between gap-4">
          {/* school */}
          <InputWithTag
            placeholder="Name of School"
            value={""}
            id="name_of_school"
            isOutlined
            title="Name of School"
            containerClass="flex-1"
          />

          <InputWithTag
            placeholder="Degree"
            value={""}
            id="degree"
            isOutlined
            title="Degree"
            containerClass="flex-1"
          />
        </div>

        <div className="flex gap-4">
          {/* period */}
          <InputWithTag
            placeholder="Start Date"
            value={""}
            id="start_date_school_resume"
            isOutlined
            title="Start Date"
          />
          <InputWithTag
            placeholder="End Date"
            value={""}
            id="end_date_school_resume"
            isOutlined
            title="End Date"
          />
        </div>

        {/* <div>
          <TextareaAutosize
            placeholder="Describe your school experience..."
            className="outline-none w-full max-w-[600px] border-[1.3px] border-solid border-input_border_grey p-2"
            minRows={3}
          />
        </div> */}
      </section>
      <CurvedButton className="bg-primary text-white flex gap-3" py={"2"}>
        <p>Add Education</p>
        <Add />
      </CurvedButton>
    </div>
  );
};

export default ResumeEducation;
