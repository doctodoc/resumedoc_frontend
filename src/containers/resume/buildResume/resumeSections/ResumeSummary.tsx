import TextAreaCustom from "@/components/inputs/TextAreaCustom";
import React from "react";

const ResumeSummary = () => {
  return (
    <div>
      <TextAreaCustom
        placeholder="Write a summary describing yourself and qualification"
        minRows={7}
        name="resumeSummary"
      />
    </div>
  );
};

export default ResumeSummary;
