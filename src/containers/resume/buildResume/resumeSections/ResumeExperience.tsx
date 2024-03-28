import CurvedButton from "@/components/buttons/CurvedButton";
import InputField from "@/components/inputs/InputField";
import InputWithTag from "@/components/inputs/InputWithTag";
import TextAreaCustom from "@/components/inputs/TextAreaCustom";
import { Add } from "@mui/icons-material";
import React from "react";

const ResumeExperience = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <section className="w-full flex flex-col gap-3 bg-light_gray_widget dark:bg-secondary_dark/50 p-4">
        <div className="flex justify-between gap-4">
          {/* company */}
          <InputWithTag
            placeholder="Name of Company"
            value={""}
            id="name_of_company_resume"
            isOutlined
            containerClass="flex-1"
            title="Name of Company"
          />

          {/* role */}
          <InputWithTag
            placeholder="Job Title"
            value={""}
            id="name_of_job_title"
            isOutlined
            containerClass="flex-1"
            title="Job Title"
          />
        </div>

        <div className="flex gap-4">
          {/* period */}
          <InputWithTag
            placeholder="Start Date"
            value={""}
            id="start_date_resume"
            isOutlined
            title="Start Date"
            type="date"
          />
          <InputWithTag
            placeholder="End Date"
            value={""}
            id="end_date_resume"
            isOutlined
            title="End Date"
            type="date"
          />
        </div>

        <div className="flex flex-col gap-3">
          {/* description */}
          <TextAreaCustom
            placeholder="Describe a work experience..."
            minRows={3}
          />
          <TextAreaCustom
            placeholder="Describe a work experience..."
            minRows={3}
          />
          <TextAreaCustom
            placeholder="Describe a work experience..."
            minRows={3}
          />
        </div>
      </section>
      <CurvedButton className="bg-primary text-white flex gap-3" py={"2"}>
        <p>Add Experience</p>
        <Add />
      </CurvedButton>
    </div>
  );
};

export default ResumeExperience;
