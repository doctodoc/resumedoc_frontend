import React from "react";
import SideMenu from "./SideMenu";
import { ArrowBackIos, Tune } from "@mui/icons-material";
import { secTextColor } from "@/assets/css/tailwindcss";
import { PlainCheckIcon } from "@/assets/svg";

type SelectResumeTemplatePropType = {
  openFilterMenu: () => void;
  resumeTemplateList?: Array<any>;
  backToTemplate: () => void;
};

const SelectResumeTemplate = ({
  openFilterMenu,
  resumeTemplateList,
  backToTemplate,
}: SelectResumeTemplatePropType) => {
  return (
    <div className="mt-4 p-2 flex flex-col gap-4">
      <header className={`flex flex-col w-full text-base ${secTextColor}`}>
        <div className={`flex justify-between`}>
          <button className="flex gap-1 items-center" onClick={backToTemplate}>
            <ArrowBackIos sx={{ fontSize: "15px" }} />
            <p>back</p>
          </button>

          <button className="flex gap-1 items-center" onClick={openFilterMenu}>
            <Tune sx={{ fontSize: "15px" }} />
            <p>filter</p>
          </button>
        </div>
      </header>
      <main>
        <section className="flex gap-3 flex-wrap justify-around">
          <SampleTemplate isSelected />
          {resumeTemplateList &&
            resumeTemplateList.map((resumeTemplate, i) => {
              return <SampleTemplate key={i}/>;
            })}
        </section>
      </main>
    </div>
  );
};

type SampleTemplatePropType = {
  isSelected?: boolean;
  ATSTested?: boolean;
  trending?: boolean;
};

const SampleTemplate = ({
  isSelected,
  ATSTested,
  trending,
}: SampleTemplatePropType) => {
  const handleTemplateSampleSelect = () => {};
  return (
    <div
      className={`group/sample-template cursor-pointer relative aspect-[1/1.414] w-40 h-full bg-white border-gray-300 border-[1px] flex flex-col justify-center items-center hover:scale-105 delay-150 duration-200 ease-in-out`}
      onClick={handleTemplateSampleSelect}
    >
      {isSelected && (
        <div
          className={`absolute inset-0 z-2 flex flex-col justify-center items-center bg-slate-500/40`}
        >
          <p className="text-primary font-semibold text-lg">selected</p>
          <div className="w-80% max-w-[50px] aspect-square">
            <PlainCheckIcon />
          </div>
        </div>
      )}

      <p
        className={`text-transparent font-semibold text-lg  ${
          isSelected
            ? ""
            : "group-hover/sample-template:text-primary delay-150 duration-200 ease-in-out"
        } `}
      >
        Pick
      </p>
      <p className="py-3"></p>
    </div>
  );
};

export default SelectResumeTemplate;
