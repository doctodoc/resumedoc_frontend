"use client";
import WidgetCard from "@/components/card/WidgetCard";
import React from "react";
import { Disclosure } from "@headlessui/react";
import MenuDisclosure from "@/components/disclosures/MenuDisclosure";

const BuildResumeCrumbs = () => {
  return (
    <WidgetCard
      title={<h1 className="dark:text-dark_primary_text"
      >Resume Sections</h1>}
      className = ""
    >
      <div className=" flex flex-col flex-1 h-full">
        <section className="w-full flex flex-col gap-3 p-3 flex-1 ">
          {/* Header */}
          <MenuDisclosure title={"Header"} defaultOpen>
            sth
          </MenuDisclosure>

          <MenuDisclosure title={"Summary"} defaultOpen>
            sth
          </MenuDisclosure>

          {/* Experience */}
          <MenuDisclosure defaultOpen title={"Experience"}>
            Experience
          </MenuDisclosure>

          {/* Education */}
          <MenuDisclosure defaultOpen title={"Education"}>
            Education
          </MenuDisclosure>

          <MenuDisclosure defaultOpen title={"Certificate"}>
            Certificate
          </MenuDisclosure>

          <MenuDisclosure defaultOpen title={"Skills"}>
            Skills
          </MenuDisclosure>

          <MenuDisclosure defaultOpen title={"Awards"}>
            Awards
          </MenuDisclosure>

          <section className="w-full flex flex-col justify-center items-center px-6 mt-6"></section>
        </section>
      </div>
    </WidgetCard>
  );
};

export default BuildResumeCrumbs;
