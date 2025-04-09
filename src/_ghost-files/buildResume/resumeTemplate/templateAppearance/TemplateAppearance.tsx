import { ArrowBackIos, Close } from "@mui/icons-material";
import React, { forwardRef, ReactNode } from "react";
import ColorSetting from "./ColorSetting";
import FontStyle from "./FontStyle";
import FontSize from "./FontSize";
import LineHeight from "./LineHeight";
import SideMenu from "../SideMenu";

type TemplateAppearanceProps = {
  closeAppearanceMenu: () => void;
};

const TemplateAppearance = forwardRef(({
  closeAppearanceMenu,
}: TemplateAppearanceProps, ref: any) => {
  return (
    <div ref={ref} className="flex flex-col gap-6 pb-8 w-[90%] max-w-[400px] min-w-[250px] h-fit overflow-y-auto absolute top-6 right-[calc(100%+4px)] z-5 shadow-lg bg-light_gray_widget dark:bg-secondary_dark px-3 py-3 dark:border-[0.8px] dark:border-r-0 dark:border-light_gray_widget/15 rounded-l-lg">
      <SideMenu title="Appearance" closeSideMenu={closeAppearanceMenu}>
        {/* color */}
        <AppearanceSection title="Accent color">
          <ColorSetting />
        </AppearanceSection>

        {/* Font style */}
        <AppearanceSection title="Font style">
          <FontStyle />
        </AppearanceSection>

        {/* Font size */}
        <AppearanceSection title="Font size">
          <FontSize />
        </AppearanceSection>

        {/* Line height */}
        <AppearanceSection title="Line height">
          <LineHeight />
        </AppearanceSection>
      </SideMenu>
      <header className="flex justify-between">
        <button className="text-grey_icon dark:text-dark_primary_text flex items-center gap-3 ">
          {/* <ArrowBackIos className="text-base" /> */}
          <p className="font-medium text-[1.12rem]">Appearance</p>
        </button>

        <button className="text-grey_icon dark:text-dark_primary_text flex items-center gap-3 ">
          <Close className="text-[1.12rem] " />
        </button>
      </header>

      <main className="flex flex-col gap-4">
        {/* color */}
        <AppearanceSection title="Accent color">
          <ColorSetting />
        </AppearanceSection>

        {/* Font style */}
        <AppearanceSection title="Font style">
          <FontStyle />
        </AppearanceSection>

        {/* Font size */}
        <AppearanceSection title="Font size">
          <FontSize />
        </AppearanceSection>

        {/* Line height */}
        <AppearanceSection title="Line height">
          <LineHeight />
        </AppearanceSection>
      </main>
    </div>
  );
})

type AppearanceSectionProps = {
  title?: string;
  children?: Array<ReactNode> | ReactNode | string;
};

const AppearanceSection = ({ title, children }: AppearanceSectionProps) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-secondary_text dark:text-dark_secondary_text">
        {title}
      </p>
      <div>{children}</div>
    </div>
  );
};

export default TemplateAppearance;
