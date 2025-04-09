import CurvedButton from "@/components/buttons/CurvedButton";
import WidgetCard from "@/components/card/WidgetCard";
import React, { useState } from "react";
import ResumeTemplateSelected from "./ResumeTemplateSelected";
import TemplateAppearance from "./templateAppearance/TemplateAppearance";
import FilterTemplate from "./filterTemplate/FilterTemplate";
import { SelectOrSelectedTemplate } from "@/shared/enums/resumeEnums";
import SelectResumeTemplate from "./SelectResumeTemplate";
import usePopUpMenu from "@/shared/hooks/usePopUpMenu";
import { ResumeFormCompType } from "@/shared/types/componentTypes";

type Props = {
  formValues: ResumeFormCompType;
};

const BuildResumeSelection = ({ formValues }: Props) => {
  const [templateSelected, setTemplateSelected] = useState(null);
  const [isSelectTemplate, setIsSelectTemplate] = useState(false);
  const resumeSampleTemplateList = Array.from({ length: 20 }, () => "");
  const {
    openPopUp: openAppearanceMenu,
    closePopUp: closeAppearanceMenu,
    popUpState: isAppearanceMenuOpen,
    togglePopUp: toggleAppearanceMenu,
    popUpRef: popUpAppearanceRef,
  } = usePopUpMenu();

  const {
    openPopUp: openFilterMenu,
    closePopUp: closeFilterMenu,
    popUpState: isFilterMenuOpen,
    togglePopUp: toggleFilterMenu,
    popUpRef: popUpFilterMenuRef,
  } = usePopUpMenu();

  const switchToSelectTemplate = () => {
    setIsSelectTemplate(true);
  };

  const switchToSelectedTemplate = () => {
    setIsSelectTemplate(false);
  };
  return (
    <WidgetCard
      title={`${
        isSelectTemplate ? "Select Resume Template" : "Resume Template"
      }`}
      className={"w-full h-full flex flex-col"}
    >
      {/* {isAppearanceMenuOpen && (
        <TemplateAppearance
          closeAppearanceMenu={closeAppearanceMenu}
          ref={popUpAppearanceRef}
        />
      )} */}
      {isFilterMenuOpen && (
        <FilterTemplate
          closeFilterMenu={closeFilterMenu}
          ref={popUpFilterMenuRef}
        />
      )}
      <div className="flex-1 overflow-y-auto">
        <ResumeTemplateSelected
          openAppearanceMenu={openAppearanceMenu}
          switchToSelectTemplate={switchToSelectTemplate}
          formValues={formValues}
        />
      </div>
      {/* {isSelectTemplate ? (
        <SelectResumeTemplate
          openFilterMenu={openFilterMenu}
          resumeTemplateList={resumeSampleTemplateList}
          backToTemplate={switchToSelectedTemplate}
        />
      ) : ( */}

      {/* )} */}
    </WidgetCard>
  );
};

export default BuildResumeSelection;
