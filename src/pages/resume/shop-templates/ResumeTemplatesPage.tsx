"use client";

import FilterResume, {
  initialResumeQueryData,
} from "@/containers/resume/selectResume/FilterResume";
import ResumeTemplateLists from "@/containers/resume/selectResume/ResumeTemplateLists";
import { ResumeFilterQueryType } from "@/shared/types/resumeTypes";
import React, { useState } from "react";

const SelectResumePage = () => {
  const [resumeFilterQuery, setResumeFilterQuery] = useState(
    initialResumeQueryData
  );
  const handleRemoveTag = (id: string) => {};
  const applyResumeFilterQuery = (filterQuery: ResumeFilterQueryType) => {};

  return (
    <div
      className={` dark:bg-primary_dark flex flex-row gap-4 flex-1 h-full relative py-6`}
    >
      <div className="sticky top-24 h-fit w-fit">
        <FilterResume applyResumeFilterQuery={applyResumeFilterQuery} />
      </div>
      <ResumeTemplateLists
        handleRemoveTag={handleRemoveTag}
        resumeFilterQuery={resumeFilterQuery}
        resumeList={[]}
      />
      {/* </main> */}
    </div>
  );
};

export default SelectResumePage;
