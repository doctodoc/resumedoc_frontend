"use client";
import { selectResumeForm } from "@/api/slices/resume/resumeFormData/slice";
import {
  pryTextColor,
  secBgColor,
  secTextColor,
} from "@/assets/css/tailwindcss";
import CurvedButton from "@/components/buttons/CurvedButton";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import ResumeCustomization from "@/pages/resume/builder/_comps/customizer/ResumeCustomization";
import FormArea from "@/pages/resume/builder/_comps/resume-forms/sections/FormArea";
import { useAppSelector } from "@/lib/hooks/globalHooks";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { Formik } from "formik";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import LayoutStructure from "./LayoutStructure";
import { useRouter } from "next/navigation";
import WidgetCard from "@/components/card/WidgetCard";
import ResumeViewer from "../_comps/viewer/ResumeViewer";
import { selectAppearance } from "@/api/slices/resume/resumeAppearanceConfig/slice";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeClosed,
  Info,
} from "@phosphor-icons/react";
import { cn } from "@/utils";
import { useDialog } from "@/api/zustand/stores/dialog";
import { sectionInformation } from "@/data/resume/resumeFormData";

export type BuilderLayoutProps = {
  sectionTabs: Array<{
    title: string;
    id: string;
    comp: (T: any) => ReactNode;
  }>;
};

type ResumeSectionsTabProps = {
  sectionTabs: BuilderLayoutProps["sectionTabs"];
  activeSection: string;
  switchSectionTab: (T: string) => void;
};

const ResumeSectionsTab = ({
  sectionTabs,
  activeSection,
  switchSectionTab,
}: ResumeSectionsTabProps) => {
  return (
    <nav className="flex gap-4 overflow-x-auto sticky top-0 z-side_bar backdrop-blur-md bg-light_pry_bg/30 dark:bg-primary_dark/60 py-2 md:py-4">
      {sectionTabs.map((tab, index) => (
        <OutlinedButton
          key={tab.id}
          className={`${
            activeSection === tab.id
              ? "border-primary bg-primary/20 dark:bg-primary/10 text-primary"
              : `border-light_gray_bg ${secTextColor} md:text-sm`
          } rounded-md capitalize whitespace-nowrap`}
          style={{
            padding: "0.2rem",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
          onClick={() => {
            switchSectionTab(tab.id);
          }}
        >
          {tab.title}
        </OutlinedButton>
      ))}
    </nav>
  );
};

const BuilderLayout = ({ sectionTabs }: BuilderLayoutProps) => {
  const [activeSection, setActiveSection] = useState(sectionTabs[0]["id"]);
  const [activeScreen, setactiveScreen] = useState<
    "content" | "customization" | "templates"
  >("content");
  const [visibleSections, setVisibleSections] = useState<String[]>([]);
  const resumeData: ResumeFormCompType = useAppSelector(selectResumeForm);
  const resumeAppearance = useAppSelector(selectAppearance);
  const {open:openDialog} = useDialog('resume')

  const toggleSectionVisibility = (id: string, showOnly: boolean = false) => {
    if (!id) return;
    const sectionId = visibleSections.findIndex(
      (sectionId) => id === sectionId
    );
    if (sectionId === -1) {
      return setVisibleSections([...visibleSections, id]);
    }
    if (sectionId >= 0 && !showOnly) {
      return setVisibleSections(
        visibleSections.filter((section) => section !== id)
      );
    }
  };

  useEffect(() => {
    console.log(visibleSections);
  }, [visibleSections]);

  const isSectionVisible = useMemo(
    () => visibleSections.find((sectionId) => activeSection === sectionId),
    [visibleSections]
  );

  const router = useRouter();
  const switchSectionTab = (id: string) => {
    setActiveSection(id);
    toggleSectionVisibility(id, true);
  };

  const handleNav = (tabId: string) => {
    switch (tabId) {
      case "dashboard":
        router.push("/dashboard");
        break;
      case "content":
        setactiveScreen("content");
        break;
      case "customization":
        setactiveScreen("customization");
        break;

      default:
        break;
    }
  };

  const nextSection = () => {
    const position = sectionTabs.findIndex((tab) => tab.id === activeSection);
    setActiveSection(
      sectionTabs[Math.min(Math.max(position + 1, 0), sectionTabs.length)]["id"]
    );
  };

  const openHelpModal = (id: any)=>{
    openDialog("display", {id: 'resume', item: sectionInformation[id as keyof typeof sectionInformation]['general']})
  }

  return (
    <LayoutStructure handleNav={handleNav} activeTab={activeScreen}>
      <div className="flex flex-col gap-4 xl:gap-6 h-full">
        <ResumeSectionsTab
          sectionTabs={sectionTabs}
          activeSection={activeSection}
          switchSectionTab={switchSectionTab}
        />
        <Formik
          initialValues={resumeData}
          onSubmit={(values) => {
            // console.log(values);
          }}
        >
          {({ values, setFieldValue }) => {
            const position = sectionTabs.findIndex(
              (tab) => tab.id === activeSection
            );
            const activeSectionPosition = Math.max(position, 0);
            return (
              <main className=" flex-1">
                <PanelGroup
                  // dark:bg-primary_dark
                  direction="horizontal"
                  className={`h-full relative`}
                >
                  <Panel defaultSize={55} collapsible className="h-full ">
                    {activeScreen === "customization" && (
                      <main className="flex-1 w-full xl:min-w-[300px] pb-6 h-full overflow-auto flex flex-col gap-8 p-3">
                        <ResumeCustomization
                          formValues={values}
                          resumeAppearance={resumeAppearance}
                        />
                      </main>
                    )}

                    {activeScreen === "content" && (
                      <main className="flex-1 w-full xl:min-w-[300px] pb-6 h-full overflow-auto flex flex-col gap-8 p-3">
                        <div className="gap-3 md:gap-5 flex justify-between  items-center font-semibold">
                          {/* <Button>back</Button> */}
                          <div>
                            <button
                              className={cn(
                                ` ${pryTextColor} gap-4 flex items-center`
                              )}
                              onClick={()=>openHelpModal(sectionTabs[activeSectionPosition].id)}
                            >
                              <p className="capitalize">
                                {sectionTabs[activeSectionPosition].title}{" "}
                                section
                              </p>
                              <div className="gap-2 flex items-center text-primary">
                                <p className="text-sm">help</p>
                                <Info size={17} weight="bold" className="" />
                              </div>
                            </button>
                          </div>
                          <div className="gap-3 md:gap-5 flex">
                            <Button
                              onClick={() =>
                                toggleSectionVisibility(activeSection)
                              }
                              variant="plain"
                              className={`flex gap-2 ${secTextColor}`}
                            >
                              <p className="capitalize">
                                {isSectionVisible ? "Hide" : "show"} section
                              </p>
                              {isSectionVisible ? (
                                <EyeClosed size={19} weight="bold" />
                              ) : (
                                <Eye size={19} weight="bold" />
                              )}
                            </Button>
                            <Button
                              className={cn(
                                `${secBgColor} ${pryTextColor} capitalize flex gap-2`
                              )}
                              style={{ fontSize: "0.8rem" }}
                              onClick={nextSection}
                            >
                              <p>{`Next Section`}</p>
                              <ArrowRight size={19} weight="bold" />
                            </Button>
                          </div>
                        </div>
                        <FormArea
                          comp={sectionTabs[activeSectionPosition].comp}
                          values={values}
                          setFieldValue={setFieldValue}
                        />
                      </main>
                    )}

                    {activeScreen === "templates" && (
                      <main className="flex-1 w-full xl:min-w-[300px] pb-6 h-full overflow-auto flex flex-col gap-8 p-3">
                        <div className="gap-3 md:gap-5 flex justify-end font-semibold">
                          {/* <Button>back</Button> */}

                          <CurvedButton
                            className="bg-primary capitalize"
                            px={6}
                            py={2}
                            style={{ fontSize: "0.8rem" }}
                          >
                            {`Save ${sectionTabs[activeSectionPosition].title}`}
                          </CurvedButton>
                        </div>
                        <FormArea
                          comp={sectionTabs[activeSectionPosition].comp}
                          values={values}
                          setFieldValue={setFieldValue}
                        />
                      </main>
                    )}
                  </Panel>

                  <PanelResizeHandle className="hidden xl:flex group/panel-resize-handle z-10 relative w-[0.7px] h-full hover:bg-primary hover:w-[1.2px] dark:bg-input_border_grey/80 bg-input_border_grey" />
                  {/* <div className="hidden md:flex"> */}

                  <Panel
                    defaultSize={45}
                    minSize={19}
                    className="sticky top-0 mb-0 h-[calc(100vh-100px)] max-h-fit hidden xl:flex z-floater "
                    // style={{ overflow: "visible", display: "" }}
                  >
                    <ResumeViewer
                      formValues={values}
                      template={"classic"}
                      handleNav={handleNav}
                    />
                  </Panel>
                  {/* </div> */}
                </PanelGroup>
              </main>
            );
          }}
        </Formik>

        <button className="absolute bottom-0 right-0 "></button>
      </div>
    </LayoutStructure>
  );
};

export default BuilderLayout;
