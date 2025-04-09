import ResumePage, {
  MM_TO_PX,
} from "@/pages/resume/builder/_comps/viewer/ResumePage";
import { AppearanceType } from "@/schema/resume/appearanceSchema";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { pdf, Text, View } from "@react-pdf/renderer";
import { CSSProperties, forwardRef, useEffect } from "react";
import { saveAs } from "file-saver";
// import { forwardRef, ReactNode } from "react";
import { usePDF } from "react-to-pdf";
import { cn } from "@/utils";
import { pageSizeMap } from "@/utils/helperData/resume";
import { useAppSelector } from "./globalHooks";
import { selectAppearance } from "@/api/slices/resume/resumeAppearanceConfig/slice";
import StoreProvider from "@/app/StoreProvider";

type TemplateProps = {
  formValues: ResumeFormCompType;
  resumeAppearance: AppearanceType;
};

type Props = {
  scale?: number;
  template: React.FC<TemplateProps>;
  mode?: string;
  pageNumber?: number;
  // children?: any ;
  style?: CSSProperties;
  className?: string;
  page?: AppearanceType["page"];
  fontFamily?: string;
} & TemplateProps;

export const useDownloadResumeWithRef = ({
  template: Template,
  formValues,
  resumeAppearance,
}: Props) => {
  const { toPDF, targetRef } = usePDF({
    filename: `${formValues?.header?.jobTitle?.value} ${new Date()
      .getDate()
      ?.toString()}`,
  });

  const download = () => {
    toPDF();
    alert("Downloading started...");
  };

  // useEffect(()=>{download()},[])

  return { download, targetRef};
};

export const useDownloadResumeWithoutRef = ({
  template: Template,
  formValues,
  resumeAppearance,
}: Props) => {
  const fontFamily = useAppSelector(selectAppearance).typography.font.family;
  const page = useAppSelector(selectAppearance).page;

  const download = async () => {
    const fileName = "test.pdf";
    const blob = await pdf(
      <StoreProvider>
        <Page
          formValues={formValues}
          resumeAppearance={resumeAppearance}
          template={Template}
          fontFamily={fontFamily}
          page={page}
        />
      </StoreProvider>
    ).toBlob();

    saveAs(blob, fileName);
  };

  return { download };
};

const Page = forwardRef<HTMLDivElement, Props>(
  ({ template: Template, formValues, resumeAppearance }: Props, ref) => (
    <ResumePage
      ref={ref}
      mode="preview"
      className="pointer-events-none p-5 absolute top-0 left-[50%] "
      // ResumePageNumber: number;
      style={{
        transform: `scale(${1}) translate(-50%,0)`,
        transformOrigin: "left top",
      }}
    >
      <Template formValues={formValues} resumeAppearance={resumeAppearance} />
    </ResumePage>
  )
);

// const Page = forwardRef<HTMLDivElement, Props>(
//   (
//     {
//       mode = "preview",
//       pageNumber,
//       style,
//       className,
//       fontFamily,
//       page,
//       template: Template,
//       formValues,
//       resumeAppearance,
//     },
//     thisref
//   ) => {

//     return (
//       <div
//         data-page={pageNumber}
//         className={cn(
//           ` text-foreground ${className}`,
//           mode === "builder" && "shadow-2xl"
//         )}
//         ref={thisref}
//         style={{
//           // fontFamily,
//           width: `${pageSizeMap[page.format].width * MM_TO_PX}px`,
//           minHeight: `${pageSizeMap[page.format].height * MM_TO_PX}px`,
//           backgroundColor: "white",
//           ...style,
//         }}
//       >
//         {/* {mode === "builder" && page.options.pageNumbers && (
//         <div className={cn("absolute -top-7 left-0 font-bold dark:text-white")}>
//           Page {pageNumber}
//         </div>
//       )} */}

//         <Template formValues={formValues} resumeAppearance={resumeAppearance} />

//         {mode === "builder" && (
//           <div
//             className="absolute inset-x-0 border-b border-dashed border-2"
//             style={{
//               top: `${pageSizeMap[page.format].height * MM_TO_PX}px`,
//             }}
//           />
//         )}
//       </div>
//     )
//   }
// );
