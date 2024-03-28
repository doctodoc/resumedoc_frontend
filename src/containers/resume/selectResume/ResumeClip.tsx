import React from "react";

type Props = {
  atsFriendly?: boolean;
  className?: string;
};

const ResumeClip = ({ atsFriendly, className }: Props) => {
  return (
    <div
      className={`w-full relative aspect-[1/1.4] rounded-lg bg-slate-500 border-primary border-[1.3px] ${className}`}
    >
      {atsFriendly && (
        <div className="absolute top-[50%] w-full p-2 bg-gradient-to-l dark:from-power_purple from-power_purple/80 dark:to-primary to-primary/80">
          <p
            className={
              "text-white font-medium text-center text-sm md:text-base"
            }
          >
            ATS Friendly
          </p>
        </div>
      )}
    </div>
  );
};

export default ResumeClip;
