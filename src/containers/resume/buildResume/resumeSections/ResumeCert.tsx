import CurvedButton from "@/components/buttons/CurvedButton";
import InputWithTag from "@/components/inputs/InputWithTag";
import { Add } from "@mui/icons-material";
import React from "react";

const ResumeCert = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <section className="w-full flex justify-center bg-light_gray_widget dark:bg-secondary_dark/50 p-4">
        <div className="flex gap-3 flex-1 justify-between">
          <InputWithTag
            placeholder="Award Title"
            value={""}
            id="award_title"
            isOutlined
            title="Award Title"
            containerClass="flex-1"
          />
          <InputWithTag
            placeholder="Date of Award"
            value={""}
            id="name_of_school"
            isOutlined
            title="Date of Award"
            containerClass="flex-1"
          />
        </div>
      </section>
      <CurvedButton className="bg-primary text-white flex gap-3 w-fit" py={"2"}>
        <p>Add Certificate</p>
        <Add />
      </CurvedButton>
    </div>
  );
};

export default ResumeCert;
