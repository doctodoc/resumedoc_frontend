import CurvedButton from "@/components/buttons/CurvedButton";
import InputWithTag from "@/components/inputs/InputWithTag";
import { Add } from "@mui/icons-material";
import React from "react";

const ResumeAwards = () => {
  return (
    <div className="w-full flex flex-col gap-3 items-center">
      <section className="w-full flex flex-col justify-center bg-light_gray_widget dark:bg-secondary_dark/50 p-4">
        <div className="flex gap-3 justify-between">
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
        {/* <InputWithTag
          placeholder="Awarded By"
          value={""}
          id="name_of_school"
          isOutlined
          title="Awarded By"
          containerClass="flex-1"
        /> */}
      </section>
      <CurvedButton className="bg-primary text-white flex gap-3 w-fit" py={"2"}>
        <p>Add Award</p>
        <Add />
      </CurvedButton>
    </div>
  );
};

export default ResumeAwards;
