import React, { forwardRef } from "react";
import SideMenu from "../SideMenu";

type FilterTemplatePropType = {
  closeFilterMenu: () => void;
  resumeTemplateList?: any;
};

const FilterTemplate = forwardRef(({
  closeFilterMenu,
  resumeTemplateList,
}: FilterTemplatePropType, ref: any) => {
  return (
    <div ref={ref}>
      <SideMenu title="Filters" closeSideMenu={closeFilterMenu}>
        <div></div>
      </SideMenu>
    </div>
  );
})

export default FilterTemplate;
