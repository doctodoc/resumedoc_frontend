import React from "react";

type Props = {
  resumeClass?: string;
};

const ResumeTemplateSelected = ({ resumeClass }: Props) => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* !No template selected! */}
      <div className={`aspect-[1/1.5] w-full bg-gray-600 flex flex-col justify-end ${resumeClass}`}>
        <p className="py-3">End</p>
      </div>
    </div>
  );
};

export default ResumeTemplateSelected;
