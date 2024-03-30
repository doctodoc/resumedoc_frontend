import {
  getResumeTemplates,
  ResumeTemplateType,
} from "@/utils/dummyDataOps/resumeTemplates";
import React, { useEffect, useState } from "react";
import ResumeClip from "../selectResume/ResumeClip";

const MyResumes = () => {
  const [resumeTemplateList, setResumeTemplateList] = useState<
    ResumeTemplateType[]
  >([]);
  useEffect(() => {
    setResumeTemplateList(getResumeTemplates({ start: 0, offset: 30 }));
  }, []);
  return (
    <div>
      <main className="">
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4 h-full">
          {resumeTemplateList.map((resume) => {
            return (
              <ResumeClip atsFriendly={resume?.atsFriendly} key={resume?.id} />
            );
          })}
        </section>
        {/* <div className="" ref={resumeContainerRef}></div> */}
      </main>
    </div>
  );
};

export default MyResumes;
