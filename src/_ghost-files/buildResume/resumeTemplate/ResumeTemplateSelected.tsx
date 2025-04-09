import { secTextColor } from "@/assets/css/tailwindcss";
import { ColorLens } from "@mui/icons-material";
import React from "react";
import HtmlToImgResume from "../../HtmlToImgResume";
import { ResumeFormCompType } from "@/shared/types/componentTypes";

type Props = {
  resumeClass?: string;
  openAppearanceMenu?: () => void;
  switchToSelectTemplate: () => void;
  formValues: ResumeFormCompType;
};

const ResumeTemplateSelected = ({
  resumeClass,
  openAppearanceMenu,
  switchToSelectTemplate,
  formValues,
}: Props) => {
  return (
    <div className=" flex flex-col flex-1 w-full h-full gap-5 ">
      <h1 className=" text-sm text-secondary_text dark:text-dark_secondary_text">
        View Changes to your Resume here
      </h1>

      <div>
        {/* action buttons */}
        <div className={`flex justify-between w-full text-sm ${secTextColor}`}>
          {/* settings */}
          <button
            className={` flex gap-1 items-center`}
            onClick={openAppearanceMenu}
          >
            <ColorLens sx={{ fontSize: "15px" }} />
            <p>Appearance</p>
          </button>

          <button className="text-primary" onClick={switchToSelectTemplate}>
            More templates
          </button>
        </div>
      </div>

      <div className=" flex flex-col flex-1 justify-between gap-3 items-center">
        <div className="w-full flex-1  flex flex-col items-center">
          {/* !No template selected! */}
          <div
            className={`w-full flex-1 flex flex-col justify-end ${resumeClass}`}
          >
            <HtmlToImgResume formValues={formValues} />
          </div>
        </div>

        {/* <CurvedButton className="w-full bg-primary text-white" py={"2"}>
        Select Resume Template
      </CurvedButton> */}
      </div>
    </div>
  );
};

export default ResumeTemplateSelected;
