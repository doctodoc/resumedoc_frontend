import CurvedButton from "@/components/buttons/CurvedButton";
import AddSectionCard from "@/components/card/AddSectionCard";
import FmkInput from "@/components/formik/FmkInput";
import DateInput from "@/components/inputs/DateInput";
import InputWithTag from "@/components/inputs/InputWithTag";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { AwardObjectType } from "@/shared/types/formTypes";
import { Add } from "@mui/icons-material";
import { FieldArray } from "formik";
import React, { useState } from "react";

interface ResumeAwardsPropTypes {
  formValues: ResumeFormCompType;
}
const ResumeAwards = ({ formValues }: ResumeAwardsPropTypes) => {
  const [awardList, setAwardList] = useState<AwardObjectType[]>([awardShape]);
  const handleawardField = ({
    val,
    k,
    i,
  }: {
    val: string;
    k: string;
    i: string;
  }) => {
    setAwardList(
      awardList.map((award, index) =>
        index === Number(i) ? { ...award, [k]: val } : award
      )
    );
  };

  const awardsList = formValues?.awards?.awards?.value
    ? formValues?.awards?.awards?.value
    : [];
  // const handleDeleteAwardEntry = (id: string) => {
  //   setAwardList(awardList.filter((exp, i) => id !== `${i}`));
  // };
  // const addAward = () => {
  //   setAwardList([...awardList, awardShape]);
  // };
  return (
    <FieldArray
      name="awards.awards.value"
      render={(arrayHelpers) => (
        <div className="w-full flex flex-col gap-3 items-center">
          {awardsList &&
            awardsList.map((award, index) => (
              <Award
                key={`${index}`}
                awardTitle={
                  award.awardTitle?.value ? award?.awardTitle?.value : ""
                }
                dateAwarded={
                  award.dateAwarded?.value ? award?.dateAwarded?.value : ""
                }
                handleAwardField={handleawardField}
                id={`${index}`}
                numberOfAwards={awardsList.length}
                handleDeleteEntry={() => {
                  arrayHelpers.remove(index);
                }}
                index={index}
              />
            ))}
          <CurvedButton
            className="bg-primary text-white flex gap-3 w-fit"
            py={"2"}
            onClick={() => {
              arrayHelpers.push(awardShape);
            }}
          >
            <p>Add Award</p>
            <Add />
          </CurvedButton>
        </div>
      )}
    />
  );
};

const awardShape = {
  awardTitle: "",
  dateAwarded: "",
};

interface AwardPropType extends AwardObjectType {
  id: string;
  index: number;
  numberOfAwards: number;
  handleAwardField: ({
    val,
    k,
    i,
  }: {
    val: string;
    k: string;
    i: string;
  }) => void;
  handleDeleteEntry: (id: string) => void;
}

const Award = ({
  awardTitle,
  dateAwarded,
  handleAwardField,
  id,
  index,
  numberOfAwards,
  handleDeleteEntry,
}: AwardPropType) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleAwardField({ val: e.target.value, k: e.target.name, i: id });
  };

  return (
    <AddSectionCard
      id={id}
      totalCard={numberOfAwards}
      handleDeleteEntry={handleDeleteEntry}
      className={"flex flex-col gap-3"}
    >
      <div className="flex gap-3 justify-between">
        <FmkInput
          placeholder="Award Title"
          id="awardTitle"
          label="Award Title"
          name={`awards.awards.value[${index}].awardTitle.value`}
          title="Award Title"
          className="flex-1"
        />

        <FmkInput
          inputProps={{
            placeholder: "Date of Award",
            id: "awardDate",
            name: `awards.awards.value[${index}].dateAwarded.value`,
          }}
          inputComp={DateInput}
          name={`awards.awards.value[${index}].dateAwarded.value`}
          label={"Award Date"}
        />
      </div>
    </AddSectionCard>
  );
};

export default ResumeAwards;
