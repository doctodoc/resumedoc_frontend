import InputField from "@/components/inputs/InputField";
import InputWithTag from "@/components/inputs/InputWithTag";
import { FieldHookConfig, useField } from "formik";
import React from "react";

interface Props {
  handleChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

const ResumeHeader = ({ handleChange }: Props) => {
  
  return (
    <div className="flex flex-col gap-4">
      <section className="flex flex-col gap-3">
        <h1 className="text-secondary_text dark:text-dark_secondary_text">
          Full Name
        </h1>
        <div className="flex gap-6 w-full flex-wrap">
          <InputWithTag
            placeholder="First Name"
            id="firstName"
            containerClass="flex-1 min-w-[200px] "
            title="First Name"
            name="firstName"
          />
          <InputWithTag
            placeholder="Last Name"
            id="lastName"
            containerClass="flex-1 min-w-[200px] "
            title="Last Name"
            name="lastName"
          />
        </div>
      </section>

      <section className="flex flex-col gap-1">
        <h1 className="text-secondary_text dark:text-dark_secondary_text">
          Job Title
        </h1>
        <div className="max-w-[500px]">
          <InputField
            placeholder="Enter role or position you are applying for"
            id="jobTitle"
            isOutlined
            name="jobTitle"
            
          />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h1 className="text-secondary_text dark:text-dark_secondary_text">
          Resume Picture
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="border-[3px] p-2 border-dashed border-input_border_grey aspect-[1.5] w-[full] max-w-[500px] flex text-center justify-center items-center">
            <p className="font-semibold text-light_gray_bg">
              Select or Drag a picture of yourself
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeHeader;
