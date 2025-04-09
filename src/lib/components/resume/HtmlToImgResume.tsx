import React, { useEffect, useRef, useState } from "react";
import ResumeSampleTemplate from "../../../containers/resume/resumeSampleTemplate/ResumeSampleTemplate";
import { useHtmlToImageConvert } from "@/shared/hooks/htmlToImage";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { useScreenshot } from "use-react-screenshot";

type Props = {
  formValues: ResumeFormCompType;
};

const HtmlToImgResume = ({ formValues }: Props) => {
  const resumeSampleRef: any = useRef(null);
  const [sampleWidth, setSampleWidth] = useState(0);
  // const [image, takeScreenShot] = useScreenshot();

  // useEffect(() => {
  //   if (resumeSampleRef.current) takeScreenShot(resumeSampleRef.current);
  // }, [formValues, resumeSampleRef.current]);
  // const { imageData } = useHtmlToImageConvert(resumeSampleRef, formValues);
  // useEffect(() => {
  //   if (resumeSampleRef) {
  //     setSampleWidth(
  //       resumeSampleRef?.current ? resumeSampleRef.current.offsetWidth : 0
  //     );
  //   }
  // }, [resumeSampleRef.current]);

  return (
    <div className="flex-1">
      <ResumeSampleTemplate
        // ref={resumeSampleRef}
        formValues={formValues}
        // sampleWidth={sampleWidth}
      />
    </div>
  );
};

export default HtmlToImgResume;
