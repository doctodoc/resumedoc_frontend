import CurvedButton from "@/components/buttons/CurvedButton";
import AddSectionCard from "@/components/card/AddSectionCard";
import FmkInput from "@/components/formik/FmkInput";
import DateInput from "@/components/inputs/DateInput";
import InputField from "@/components/inputs/InputField";
import InputWithTag from "@/components/inputs/InputWithTag";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { EducationObjectType } from "@/shared/types/formTypes";
import { Add } from "@mui/icons-material";
import { FieldArray } from "formik";
// import { TextareaAutosize } from "@mui/material";
import React, { useState } from "react";

interface ResumeEducationPropTypes {
  formValues: ResumeFormCompType;
}

const ResumeEducation = ({ formValues }: ResumeEducationPropTypes) => {
  // const [educationList, setEducationList] = useState<EducationObjectType[]>([
  //   educationShape,
  // ]);

  // const addEducation = () => {
  //   setEducationList([...educationList, educationShape]);
  // };

  // const handleDeleteEducation = (id: string) => {
  //   setEducationList(educationList.filter((exp, i) => id !== `${i}`));
  // };

  const handleEducationField = ({
    val,
    k,
    i,
  }: {
    val: string;
    k: string;
    i: string;
  }) => {
    // setEducationList(
    //   educationList.map((education, index) =>
    //     index === Number(i) ? { ...education, [k]: val } : education
    //   )
    // );
  };

  const educationList = formValues?.education?.education?.value
    ? formValues?.education?.education?.value
    : [];

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <FieldArray
        name="education.education.value"
        render={(arrayHelpers) => (
          <>
            {educationList.map((education, index) => (
              <Education
                key={`${index}`}
                schoolName={
                  education?.schoolName?.value
                    ? education?.schoolName?.value
                    : ""
                }
                degree={
                  education?.degree?.value ? education?.degree?.value : ""
                }
                startDate={
                  education?.startDate?.value ? education?.startDate?.value : ""
                }
                endDate={
                  education?.endDate?.value ? education?.endDate?.value : ""
                }
                handleDeleteEntry={() => {
                  arrayHelpers.remove(index);
                }}
                handleEducationField={handleEducationField}
                numberOfEducation={educationList?.length}
                id={`${index}`}
                index={index}
              />
            ))}
            <CurvedButton
              className="bg-primary text-white flex gap-3"
              py={"2"}
              onClick={() => {
                arrayHelpers.push(educationShape);
              }}
            >
              <p>Add Education</p>
              <Add />
            </CurvedButton>
          </>
        )}
      />
    </div>
  );
};

const educationShape = {
  schoolName: { value: "" },
  degree: { value: "" },
  startDate: { value: "" },
  endDate: { value: "" },
};

export interface EducationPropType extends EducationObjectType {
  handleDeleteEntry: (id: string) => void;
  id: string;
  index: number;
  handleEducationField: ({
    val,
    k,
    i,
  }: {
    val: string;
    k: string;
    i: string;
  }) => void;
  numberOfEducation: number;
}

const Education = ({
  schoolName,
  degree,
  startDate,
  endDate,
  handleEducationField,
  id,
  numberOfEducation,
  handleDeleteEntry,
  index,
}: EducationPropType) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleEducationField({ val: e.target.value, k: e.target.name, i: id });
  };
  return (
    <AddSectionCard
      totalCard={numberOfEducation}
      id={id}
      handleDeleteEntry={handleDeleteEntry}
      className={"flex flex-col gap-3"}
    >
      <div className="flex justify-between gap-4">
        {/* school */}
        <FmkInput
          placeholder="Name of School"
          id={"schoolName"}
          title="Name of School"
          className="flex-1"
          label="Name of School"
          name={`education.education.value[${index}].schoolName.value`}
        />

        <FmkInput
          placeholder="Degree"
          id={"degree"}
          title="Degree"
          label="Degree"
          className="flex-1"
          name={`education.education.value[${index}].degree.value`}
        />
      </div>

      <div className="flex gap-4">
        {/* period */}
        <FmkInput
          inputProps={{
            placeholder: "Start Date",
            id: "startDate",
            name: `education.education.value[${index}].startDate.value`,
          }}
          inputComp={DateInput}
          name={`education.education.value[${index}].startDate.value`}
        />

        <FmkInput
          inputProps={{
            placeholder: "End Date",
            id: "endDate",
            name: `education.education.value[${index}].endDate.value`,
          }}
          inputComp={DateInput}
          name={`education.education.value[${index}].endDate.value`}
        />
      </div>
    </AddSectionCard>
  );
};

export default ResumeEducation;
