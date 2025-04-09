import { pryTextColor, secTextColor } from "@/assets/css/tailwindcss";
import CurvedButton from "@/components/buttons/CurvedButton";
import AddSectionCard from "@/components/card/AddSectionCard";
import {
  Context,
  useCardContext,
} from "@/components/card/CollapsedCard";
import FmkInput from "@/components/formik/FmkInput";
import DateInput from "@/components/inputs/DateInput";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { EducationObjectType, SetFieldValue } from "@/shared/types/formTypes";
import { cn } from "@/utils";
import { Add } from "@mui/icons-material";
import { FieldArray, FieldArrayRenderProps } from "formik";
// import { TextareaAutosize } from "@mui/material";
import React, { useState } from "react";

interface ResumeEducationPropTypes {
  formValues: ResumeFormCompType;
  setFieldValue: SetFieldValue;
}

const EducationSection = ({
  formValues,
  setFieldValue,
}: ResumeEducationPropTypes) => {
  const { activeCards, collapseCard, activateCard, setActiveCards } =
    useCardContext() as Context;

  const addEducation = (arrayHelpers: FieldArrayRenderProps) => {
    arrayHelpers.unshift({
      schoolName: { value: "" },
      degree: { value: "" },
      startDate: { value: "" },
      endDate: { value: "" },
    });
  };

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

  const showCard = (i: number) => {
    if (activateCard) {
      activateCard(i);
    }
  };

  const collapse = (id?: number) => {
    // console.log("clicked collapse ");
    if (collapseCard && typeof id === "number") {
      collapseCard(id);
    }
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <FieldArray
        name="education.education.value"
        render={(arrayHelpers) => (
          <div className={"flex flex-col items-start gap-3 w-full"}>
            <CurvedButton
              className="bg-primary text-white flex gap-3"
              py={"1"}
              onClick={() => addEducation(arrayHelpers)}
            >
              <p>Add Education</p>
              <Add />
            </CurvedButton>
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
                setFieldValue={setFieldValue}
                activateCard={() => showCard(index)}
                collapse={collapse}
                collapsed={activeCards.findIndex((card) => card === index) < 0}
              />
            ))}
          </div>
        )}
      />
    </div>
  );
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
  setFieldValue: SetFieldValue;
  activateCard: (id: number) => void;
  collapse: (id?: number) => void;
  collapsed: boolean;
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
  setFieldValue,
  activateCard,
  collapse,
  collapsed,
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
      collapsed={collapsed}
      title={`Education ${schoolName}`}
      // subtitle={`Role  ${role}`}
      collapse={() => collapse(index)}
      activateCard={(index) => activateCard(index)}
    >
      <div className="flex gap-4 flex-wrap">
        <div className="flex-1 min-w-fit max-w-[700px] w-fit">
          {/* <p className={`capitalize ${secTextColor}`}>School Name</p> */}

          {/* school */}
          <FmkInput
            placeholder="Name of School"
            id={"schoolName"}
            title="School Name"
            className="flex-1"
            name={`education.education.value[${index}].schoolName.value`}
            label={
              <p>
                What is the{" "}
                <span className={cn(`font-semibold ${pryTextColor}`)}>
                  {" name of the educational institution "}
                </span>
                ?
              </p>
            }
          />

          {/* school */}
          <FmkInput
            placeholder="United States"
            id={"location"}
            title="School location"
            className="flex-1"
            name={`education.education.value[${index}].country.value`}
            label={
              <p>
                What{" "}
                <span className={cn(`font-semibold ${pryTextColor}`)}>
                  {" country "}
                </span>
                is the educational institution located?
              </p>
            }
          />
        </div>

        <div className="flex-1 min-w-fit max-w-[700px] w-fit">
          {/* <p className={`capitalize ${secTextColor}`}>Degree</p> */}

          <FmkInput
            placeholder="Eg; Accounting, Botany, Computer Science..."
            id={"degree"}
            title="Degree"
            className="flex-1"
            name={`education.education.value[${index}].degree.value`}
            label={
              <p>
                What is the{" "}
                <span className={cn(`font-semibold ${pryTextColor}`)}>
                  degree obtained
                </span>
                ?
              </p>
            }
          />
        </div>
      </div>

      <div className="flex-1 min-w-fit max-w-[700px] w-fit">
        {/* <p className={`capitalize ${secTextColor}`}>Location</p> */}

        <FmkInput
          placeholder="3.8 CGPA"
          id={"gradePoint"}
          title="location"
          className="flex-1 max-w-[50%]"
          name={`education.education.value[${index}].gradePoint.value`}
          label={
            <p>
              What is the{" "}
              <span className={cn(`font-semibold ${pryTextColor}`)}>
                {" overall grade (CGPA)"}
              </span>
              ?
            </p>
          }
          optional
        />
      </div>

      <div className="flex gap-4 flex-wrap">
        <div className="flex-1 min-w-fit max-w-[700px] w-fit">
          <p className={`capitalize ${pryTextColor} font-semibold`}>
            Start date
          </p>

          {/* period */}
          <FmkInput
            inputProps={{
              placeholder: "Start Date",
              id: "startDate",
              name: `education.education.value[${index}].startDate.value`,
            }}
            inputComp={DateInput}
            name={`education.education.value[${index}].startDate.value`}
            setFieldValue={setFieldValue}
          />
        </div>

        <div className="flex-1 min-w-fit max-w-[700px] w-fit">
          <p className={`capitalize ${pryTextColor} font-semibold`}>End date</p>

          {/* period */}
          <FmkInput
            inputProps={{
              placeholder: "End Date",
              id: "endDate",
              name: `education.education.value[${index}].endDate.value`,
            }}
            inputComp={DateInput}
            name={`education.education.value[${index}].endDate.value`}
            setFieldValue={setFieldValue}
          />
        </div>
      </div>
    </AddSectionCard>
  );
};

export default EducationSection;
