import { gradientGreenToPurple, pryTextColor } from "@/assets/css/tailwindcss";
import RoundedButton from "@/components/buttons/RoundedButton";
import FmkInput from "@/components/formik/FmkInput";
import TextAreaCustom from "@/components/inputs/TextAreaCustom";
import { cn } from "@/utils";
import { AutoAwesome } from "@mui/icons-material";
import React from "react";

const ResumeSummary = () => {
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="w-full max-w-[500px]">
        <FmkInput
          id="resume_experience_level"
          name={"summary.experienceLevel.value"}
          type="text"
          label={
            <p>
              What is your{" "}
              <span className={cn(`font-semibold ${pryTextColor}`)}>
                Experience Level
              </span>
              ?
            </p>
          }
          placeholder="Select Years of Experience or Level of Experience"
          className="min-w-[200px] w-full"
        />
      </div>
      <div className="w-full flex justify-center my-3">
        <RoundedButton
          className={`w-full max-w-[500px] ${gradientGreenToPurple} flex gap-3 justify-center text-white text-base font-medium`}
          py={"2"}
        >
          <p>Generate a Professional summary with AI</p>
          <AutoAwesome />
        </RoundedButton>
      </div>
      <FmkInput
        id="summary"
        placeholder="Write a summary describing yourself and qualification OR Click the button to generate with AI"
        inputProps={{
          id: "summary",
          placeholder:
            "Write a summary describing yourself and qualification OR Click the button to generate with AI",
          minRows: 7,
          name: "summary.summary.value",
          className: "min-w-[200px] w-full",
        }}
        inputComp={TextAreaCustom}
        name="resumeSummary"
      />
    </div>
  );
};

export default ResumeSummary;
