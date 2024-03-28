import CurvedButton from "@/components/buttons/CurvedButton";
import WidgetCard from "@/components/card/WidgetCard";
import React from "react";
import ResumeTemplateSelected from "./ResumeTemplateSelected";

const BuildResumeSelection = () => {
  return (
    <WidgetCard
      title={"Resume Template"}
      className={""}
    >
      <div className="flex flex-col flex-1 h-full gap-5">
        <h1 className=" text-sm text-secondary_text dark:text-dark_secondary_text">
          View Changes to your Resume here
        </h1>

        <div>
          {/* theme color */}
          
        </div>

        <div className=" flex flex-col flex-1 justify-between gap-3 items-center">
          <ResumeTemplateSelected />

          <CurvedButton className="w-full bg-primary text-white" py={"2"}>
            Select Resume Template
          </CurvedButton>
        </div>
      </div>
    </WidgetCard>
  );
};

export default BuildResumeSelection;
