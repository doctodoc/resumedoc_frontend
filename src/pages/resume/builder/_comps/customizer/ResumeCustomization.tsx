import { setPaperSize } from "@/api/slices/resume/resumeAppearanceConfig/slice";
import { greyBorder } from "@/assets/css/tailwindcss";
import WidgetCard from "@/components/card/WidgetCard";
import TitleSection from "@/components/sections/TitleSection";
import { useAppDispatch } from "@/lib/hooks/globalHooks";
import { AppearanceType } from "@/schema/resume/appearanceSchema";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { cn } from "@/utils";
import { KeyboardArrowRight } from "@mui/icons-material";
import React, { useEffect } from "react";

type Props = {
  formValues: ResumeFormCompType;
  resumeAppearance: AppearanceType;
  // sampleWidth: number;
};

const ResumeCustomization = ({ resumeAppearance, formValues }: Props) => {
  const {
    layout,
    page: {
      margin,
      format,
      options: { breakLine, pageNumbers },
    },
    theme: { background, text, primary },
    typography: {
      font: { family, subset, variants, size: fontSize, headerSize },
      lineHeight,
      hideIcons,
      underlineLinks,
    },
  } = resumeAppearance;
  const dispatch = useAppDispatch();

  const setFormatSize = (size: AppearanceType["page"]["format"]) => {
    console.log(size);
    dispatch(setPaperSize(size));
  };

  useEffect(() => {
    console.log(resumeAppearance["page"]["format"]);
  }, [resumeAppearance]);
  return (
    <div className="flex flex-col gap-3 xl:gap-5 px-3 h-full overflow-auto">
      <WidgetCard className="flex flex-col">
        <div className="w-full h-full flex-1  flex flex-col justify-between ">
          <TitleSection
            title={"Select a Template and Edit"}
            plain
            bigFont
            alignStart
          >
            <p>Choose from a wide range of professional templates.</p>
          </TitleSection>

          <div></div>

          <button className="flex items-center gap-2 font-semibold text-lg">
            <p>See All</p>
            <KeyboardArrowRight />
          </button>
        </div>
      </WidgetCard>

      <WidgetCard>
        <TitleSection title={"Layout"} plain bigFont alignStart>
          <p className={"mb-3"}>Paper size</p>
          <div className="flex gap-2">
            <button
              className={cn(
                `${greyBorder} hover:border-primary flex items-center justify-center h-40 aspect-[1/1.414] bg-white`,
                format === "a4" && "border-primary border-2"
              )}
              onClick={() => setFormatSize("a4")}
            >
              <p>A4</p>
            </button>
            <button
              className={cn(
                `${greyBorder} hover:border-primary flex items-center justify-center h-40 aspect-[1/1.294] bg-white`,
                format === "letter" && "border-primary border-2"
              )}
              onClick={() => setFormatSize("letter")}
            >
              <p>Letter</p>
            </button>
          </div>
        </TitleSection>
      </WidgetCard>

      <WidgetCard>
        <TitleSection title="Colors" plain bigFont alignStart>
          <p>Colors</p>
        </TitleSection>
      </WidgetCard>

      <WidgetCard>
        <TitleSection title="Summary style" plain bigFont alignStart>
          <p>Font</p>
        </TitleSection>
      </WidgetCard>

      <WidgetCard>
        <TitleSection title="Experience style" plain bigFont alignStart>
          <p>Spacing</p>
        </TitleSection>
      </WidgetCard>

      <WidgetCard>
        <TitleSection title="Project style" plain bigFont alignStart>
          <p>General</p>
        </TitleSection>
      </WidgetCard>

      <WidgetCard>
        <TitleSection title="Certificate style" plain bigFont alignStart>
          <p>General</p>
        </TitleSection>
      </WidgetCard>

      <WidgetCard>
        <TitleSection title="Education style" plain bigFont alignStart>
          <p>General</p>
        </TitleSection>
      </WidgetCard>

      <WidgetCard>
        <TitleSection title="Skills style" plain bigFont alignStart>
          <p>General</p>
        </TitleSection>
      </WidgetCard>

      <WidgetCard>
        <TitleSection title="Award style" plain bigFont alignStart>
          <p>General</p>
        </TitleSection>
      </WidgetCard>

      <WidgetCard>
        <TitleSection title="Involvement style" plain bigFont alignStart>
          <p>General</p>
        </TitleSection>
      </WidgetCard>
    </div>
  );
};

export default ResumeCustomization;
