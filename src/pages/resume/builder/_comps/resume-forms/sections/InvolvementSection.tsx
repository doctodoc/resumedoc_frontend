import { pryTextColor, secTextColor } from "@/assets/css/tailwindcss";
import CurvedButton from "@/components/buttons/CurvedButton";
import AddSectionCard from "@/components/card/AddSectionCard";
import {
  Context,
  useCardContext,
} from "@/components/card/CollapsedCard";
import FmkInput from "@/components/formik/FmkInput";
import DateInput from "@/components/inputs/DateInput";
import DropDownSearch from "@/components/inputs/DropDownSearch";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { InvolvementObjectType, SetFieldValue } from "@/shared/types/formTypes";
import { cn } from "@/utils";
import { Add } from "@mui/icons-material";
import { FieldArray, FieldArrayRenderProps } from "formik";
// import { TextareaAutosize } from "@mui/material";
import React, { useState } from "react";

interface ResumeInvolvementPropTypes {
  formValues: ResumeFormCompType;
  setFieldValue: SetFieldValue;
}

const InvolvementSection = ({
  formValues,
  setFieldValue,
}: ResumeInvolvementPropTypes) => {
  const { activeCards, collapseCard, activateCard, setActiveCards } =
    useCardContext() as Context;
  // const [educationList, setEducationList] = useState<EducationObjectType[]>([
  //   educationShape,
  // ]);

  // const addEducation = () => {
  //   setEducationList([...educationList, educationShape]);
  // };

  // const handleDeleteEducation = (id: string) => {
  //   setEducationList(educationList.filter((exp, i) => id !== `${i}`));
  // };

  //   const handleEducationField = ({
  //     val,
  //     k,
  //     i,
  //   }: {
  //     val: string;
  //     k: string;
  //     i: string;
  //   }) => {
  //     // setEducationList(
  //     //   educationList.map((education, index) =>
  //     //     index === Number(i) ? { ...education, [k]: val } : education
  //     //   )
  //     // );
  //   };

  const involvementList = formValues?.involvement?.involvement?.value
    ? formValues?.involvement?.involvement?.value
    : [];
  const addInvolvement = (arrayHelpers: FieldArrayRenderProps) => {
    arrayHelpers.push({
      organizationName: { value: "" },
      role: { value: "" },
      startDate: { value: "" },
      endDate: { value: "" },
    });
  };

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
    <div className="w-full flex flex-col items-center gap-4 b">
      <FieldArray
        name="involvement.involvement.value"
        render={(arrayHelpers) => (
          <div className={"flex flex-col items-start gap-3 w-full"}>
            <CurvedButton
              className="bg-primary text-white flex gap-3"
              py={"1"}
              onClick={() => addInvolvement(arrayHelpers)}
            >
              <p>Add Involvement</p>
              <Add />
            </CurvedButton>
            {involvementList.map((involvement, index) => (
              <Involvement
                key={`${index}`}
                organizationName={
                  involvement?.organizationName?.value
                    ? involvement?.organizationName?.value
                    : ""
                }
                role={involvement?.role?.value ? involvement?.role?.value : ""}
                startDate={
                  involvement?.startDate?.value
                    ? involvement?.startDate?.value
                    : ""
                }
                endDate={
                  involvement?.endDate?.value ? involvement?.endDate?.value : ""
                }
                handleDeleteEntry={() => {
                  arrayHelpers.remove(index);
                }}
                // handleEducationField={handleEducationField}
                numberOfInvolvement={involvementList?.length}
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

export interface InvolvementPropType extends InvolvementObjectType {
  handleDeleteEntry: (id: string) => void;
  id: string;
  index: number;
  handleInvolvementField?: ({
    val,
    k,
    i,
  }: {
    val: string;
    k: string;
    i: string;
  }) => void;
  numberOfInvolvement: number;
  setFieldValue: SetFieldValue;
  activateCard: (id: number) => void;
  collapse: (id?: number) => void;
  collapsed: boolean;
}

const Involvement = ({
  organizationName,
  role,
  startDate,
  endDate,
  handleInvolvementField,
  id,
  numberOfInvolvement,
  handleDeleteEntry,
  index,
  setFieldValue,
  activateCard,
  collapse,
  collapsed,
}: InvolvementPropType) => {
  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     handleInvolvementField({ val: e.target.value, k: e.target.name, i: id });
  //   };
  return (
    <AddSectionCard
      totalCard={numberOfInvolvement}
      id={id}
      handleDeleteEntry={handleDeleteEntry}
      className={"flex flex-col gap-3"}
      collapsed={collapsed}
      title={`Involvement ${organizationName}`}
      // subtitle={`Role  ${role}`}
      collapse={() => collapse(index)}
      activateCard={(index) => activateCard(index)}
    >
      <div className="flex gap-4 flex-wrap">
        <div className="flex-1 min-w-fit max-w-[700px] w-fit">
          {/* <p className={`capitalize ${secTextColor}`}>Organization name</p> */}

          <FmkInput
            placeholder="Organization Name Eg; Cybergirls, Google students fellowship, Youth Leadership..."
            id={"organizationName"}
            title="Volunteer Organization"
            className="flex-1"
            name={`involvement.involvement.value[${index}].organizationName.value`}
            optional
            label={
              <p className={`capitalize ${secTextColor} whitespace-nowrap`}>
                What is the
                <span className={cn(`font-semibold ${pryTextColor}`)}>
                  {" name of the volunteering organization "}
                </span>
                in this company?
              </p>
            }
          />
        </div>

        <div className="flex-1 min-w-fit max-w-[700px] w-fit">
          {/* <p className={`capitalize ${secTextColor}`}>Role in organization </p> */}

          <FmkInput
            placeholder="Role or Postition in that Organization Eg; Member, Group Leader, Student President"
            id={"role"}
            title="role in organization"
            className="flex-1"
            name={`involvement.involvement.value[${index}].role.value`}
            label={
              <p className={`capitalize ${secTextColor} whitespace-nowrap`}>
                What is your
                <span className={cn(`font-semibold ${pryTextColor}`)}>
                  {" role in this volunteering organization "}
                </span>
                in this company?
              </p>
            }
            optional
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {/* country */}
        <div className="flex-1 min-w-[200px] max-w-[700px]">
          {/* <p className={`capitalize ${secTextColor}`}>Country</p> */}
          <FmkInput
            inputProps={{
              placeholder: "Select country",
              name: `involvement.involvement.value[${index}].country.value`,
              id: "country",
              className: "w-full",
              freeSolo: true,

              options: [
                { display: "Entry Level", id: "entryLevel" },
                { display: "Intermediate Level", id: "intermediateLevel" },
              ],
              fullWidth: true,
            }}
            name={`involvement.involvement.value[${index}].country.value`}
            inputComp={DropDownSearch}
            setFieldValue={setFieldValue}
            title="country"
            label={
              <p className={`capitalize ${secTextColor} whitespace-nowrap`}>
                What
                <span className={cn(`font-semibold ${pryTextColor}`)}>
                  {" country "}
                </span>
                is this volunteering organization located?
              </p>
            }
            optional
          />
        </div>

        <div className="flex-1 min-w-[200px] max-w-[700px]">
          {/* <p className={`capitalize ${secTextColor}`}>City</p> */}
          <FmkInput
            inputProps={{
              placeholder: "Select city",
              name: `involvement.involvement.value[${index}].city.value`,
              id: "city",
              className: "w-full",
              freeSolo: true,

              options: [
                { display: "Entry Level", id: "entryLevel" },
                { display: "Intermediate Level", id: "intermediateLevel" },
              ],
              fullWidth: true,
            }}
            name={`involvement.involvement.value[${index}].city.value`}
            inputComp={DropDownSearch}
            setFieldValue={setFieldValue}
            title="city"
            label={
              <p className={`capitalize ${secTextColor} whitespace-nowrap`}>
                What
                <span className={cn(`font-semibold ${pryTextColor}`)}>
                  {"city"}
                </span>
                is this volunteering organization located?
              </p>
            }
            optional
          />
        </div>
      </div>

      <div className="flex gap-4 flex-wrap">
        <div className="flex-1 min-w-fit max-w-[700px] w-fit">
          {/* <p className={`capitalize ${secTextColor}`}>Start date</p> */}

          {/* period */}
          <FmkInput
            inputProps={{
              placeholder: "Start Date",
              id: "startDate",
              name: `involvement.involvement.value[${index}].startDate.value`,
            }}
            inputComp={DateInput}
            name={`involvement.involvement.value[${index}].startDate.value`}
            setFieldValue={setFieldValue}
            label={
              <p className={`capitalize ${secTextColor} whitespace-nowrap`}>
                <span className={cn(`font-semibold ${pryTextColor}`)}>
                  {" start date "}
                </span>
              </p>
            }
          />
        </div>

        <div className="flex-1 min-w-fit max-w-[700px] w-fit">
          {/* <p className={`capitalize ${secTextColor}`}>End date</p> */}

          {/* period */}
          <FmkInput
            inputProps={{
              placeholder: "End Date",
              id: "endDate",
              name: `involvement.involvement.value[${index}].endDate.value`,
            }}
            inputComp={DateInput}
            name={`involvement.involvement.value[${index}].endDate.value`}
            setFieldValue={setFieldValue}
            label={
              <p className={`capitalize ${secTextColor} whitespace-nowrap`}>
                <span className={cn(`font-semibold ${pryTextColor}`)}>
                  {" end date "}
                </span>
              </p>
            }
          />
        </div>
      </div>
    </AddSectionCard>
  );
};

export default InvolvementSection;
