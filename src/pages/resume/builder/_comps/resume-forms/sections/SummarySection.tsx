import {
  gradientGreenToPurple,
  pryTextColor,
  secTextColor,
} from "@/assets/css/tailwindcss";
import RoundedButton from "@/components/buttons/RoundedButton";
import WidgetCard from "@/components/card/WidgetCard";
import FmkInput from "@/components/formik/FmkInput";
import CustomSelectInput from "@/components/inputs/CustomSelectInput";
import { RichInput } from "@/components/inputs/RichInput";
import TextAreaCustom from "@/components/inputs/TextAreaCustom";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { SetFieldValue } from "@/shared/types/formTypes";
import { cn } from "@/utils";
import { AutoAwesome } from "@mui/icons-material";
import React, { ReactNode } from "react";

type Props = {
  setFieldValue: SetFieldValue;
  formValues: ResumeFormCompType;
};

const experienceLevels: Array<{ id: string; display: ReactNode }> = [
  { display: "Entry Level (0 - 2 Years)", id: "entryLevel" },
  {
    display: "Intermediate or Junior Level (2 - 4 Years)",
    id: "intermediateLevel",
  },
  { display: "Mid-Level (3 - 5 Years)", id: "midLevel" },
  { display: "Senior (5 - 7 Years)", id: "seniorLevel" },
  { display: "Executive Level (5 or more Years)", id: "executiveLevel" },
];

const SummarySection = ({ setFieldValue, formValues }: Props) => {
  return (
    <div className="flex flex-col items-start gap-3 flex-1 w-full">
      <div className={`flex flex-col flex-wrap gap-3 w-full`}>
        <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
          {/* <p >
            What role are you applying for?
          </p> */}
          <FmkInput
            placeholder="Job Title"
            id="header.jobTitle.value"
            className="w-full max-w-[500px]"
            label={
              <p className={`capitalize ${secTextColor} whitespace-nowrap`}>
                What
                <span className={cn(`font-semibold ${pryTextColor}`)}>
                  {" role "}
                </span>
                are you applying for?
              </p>
            }
            name="header.jobTitle.value"
            type="text"
            // label="Full Name"
          />
        </div>

        <div className="w-full flex-1 min-w-[250px] flex flex-col gap-1">
          {/* <p className={`${secTextColor}`}>What is your Experience Level</p> */}
          <FmkInput
            id="resume_experience_level"
            name={"summary.experienceLevel.value"}
            type="text"
            className="min-w-[200px] max-w-[500px] w-full"
            setFieldValue={setFieldValue}
            label={
              <p>
                What is your{" "}
                <span className={cn(`font-semibold ${pryTextColor}`)}>
                  Experience Level
                </span>
                ?
              </p>
            }
            // formDescription="Your description also depends on your current Job's level"
            inputProps={{
              dropDownItems: experienceLevels,
              id: "resume_experience_level",
              name: "summary.experienceLevel.value",
              type: "text",
              label: "Experience Level",
              placeholder: "Select Years of Experience or Level of Experience",
              className: "min-w-[200px] max-w-[500px]  w-full",
              // onChange: setFieldValue,
              // value: formValues
            }}
            inputComp={CustomSelectInput}
          />
        </div>
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
      {/* <FmkInput
        id="summary"
        placeholder="Write a summary describing yourself and qualification OR Click the button to generate with AI"
        inputProps={{
          id: "summary",
          placeholder:
            "Write a summary describing yourself and qualification OR Click the button to generate with AI",
          minRows: 7,
          name: "summary.summary.value",
          className: "min-w-[200px] max-w-[700px] w-full",
          // isLocked: true,
        }}
        setFieldValue={setFieldValue}
        inputComp={TextAreaCustom}
        name="summary.summary.value"
      /> */}

      <div className="flex flex-col gap-2">
        <FmkInput
          id="summary"
          name="summary.summary.value"
          label={
            <p className={`capitalize ${secTextColor} whitespace-nowrap`}>
              Compose a short and detailed
              <span className={cn(`font-semibold ${pryTextColor}`)}>
                {" summary of your career "}
              </span>
            </p>
          }
          inputComp={RichInput}
          inputProps={{
            name: "summary.summary.value",
            content: formValues?.summary?.summary?.value,
          }}
          setFieldValue={setFieldValue}
        />
      </div>
    </div>
  );
};

export default SummarySection;
