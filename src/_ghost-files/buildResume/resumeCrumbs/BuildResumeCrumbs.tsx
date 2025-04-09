"use client";
import WidgetCard from "@/components/card/WidgetCard";
import React, { useCallback, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import MenuDisclosure from "@/components/disclosures/MenuDisclosure";
import FilterCrumbs, { FilterCrumbsProp } from "./FilterCrumbs";
import { Add, Visibility } from "@mui/icons-material";
import CurvedButton from "@/components/buttons/CurvedButton";
import {
  ResumeCrumbArray,
  ResumeFormCompType,
  ResumeFormDataUnion,
} from "@/shared/types/componentTypes";
import { ErrorType } from "@/shared/types/formTypes";
import { transformCrumbsArray } from "@/utils/helperFunctions/transformOps";
import Button from "@/components/buttons/Button";

interface CrumbsListProp {
  crumbsList: ResumeFormCompType | null;
}

const BuildResumeCrumbs = ({ crumbsList }: CrumbsListProp) => {
  const handleFilterCrumbs: FilterCrumbsProp["handleFilterCrumbs"] = () => {};
  const [crumbsArray, setCrumbsArray] = useState<ResumeCrumbArray>([]);

  // const transformCrumbsIntoArray = useCallback(()=>{
  //   return transformCrumbsArray(crumbsList)
  // },[crumbsList])

  useEffect(() => {
    if (!crumbsList) return;
    let crumbsArray = transformCrumbsArray(crumbsList);
    if (crumbsArray) {
      setCrumbsArray(crumbsArray);
    }
  }, [crumbsList]);

  return (
    <WidgetCard
      title={
        <div className={"flex justify-between"}>
          <h1 className="dark:text-dark_primary_text ">Resume Sections</h1>
          {/* <FilterCrumbs activeFilterId="" handleFilterCrumbs={handleFilterCrumbs}/> */}
        </div>
      }
      className="rounded-r-xl h-[calc(100vh-10rem)]"
    >
      <div className=" flex flex-col flex-1 h-full">
        <section className="w-full flex flex-col gap-3 pt-3  px-3 flex-1 relative overflow-y-scroll">
          {crumbsArray.map((crumb) => (
            <ResumeCrumb
              title={crumb.alias}
              contents={crumb.value}
              key={crumb.name}
            />
          ))}

          <section className="w-full flex flex-col justify-center items-center px-6 py-2 mt-6 sticky bottom-0 bg-light_gray_widget dark:bg-secondary_dark ">
            <CurvedButton className={`bg-black text-white flex gap-3`} py={"2"}>
              <p>More Sections</p>
              <Add />
            </CurvedButton>
          </section>
        </section>
      </div>
    </WidgetCard>
  );
};

type ResumeCrumbProp = {
  contents: Array<{ alias: string; value: any; error: ErrorType }>;
  title: string;
};

const ResumeCrumb = ({ contents, title }: ResumeCrumbProp) => {
  return (
    <MenuDisclosure defaultOpen title={title}>
      <div className={"flex flex-col gap-3"}>
        {contents.map((content, i) => (
          <Button key={`${i}`} className="text-base dark:font-light ">
            <div className="w-full flex items-center gap-2 group crumb-button">
              <p>{content.alias}</p>
              <Visibility className=" text-transparent text-base font-semibold group-hover-[.crumb-button]:text-banner_purple delay-150 duration-200 ease-in-out" />
            </div>
          </Button>
        ))}
      </div>
    </MenuDisclosure>
  );
};

export default BuildResumeCrumbs;
