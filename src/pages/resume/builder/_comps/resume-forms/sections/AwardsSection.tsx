import { pryTextColor, secTextColor } from "@/assets/css/tailwindcss";
import CurvedButton from "@/components/buttons/CurvedButton";
import AddSectionCard from "@/components/card/AddSectionCard";
import {
  Context,
  useCardContext,
} from "@/components/card/CollapsedCard";
import FmkInput from "@/components/formik/FmkInput";
import DateInput from "@/components/inputs/DateInput";
import InputWithTag from "@/components/inputs/InputWithTag";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { AwardObjectType, SetFieldValue } from "@/shared/types/formTypes";
import { cn } from "@/utils";
import { Add } from "@mui/icons-material";
import { FieldArray, FieldArrayRenderProps } from "formik";
import React, { useState } from "react";

interface ResumeAwardsPropTypes {
  formValues: ResumeFormCompType;
  setFieldValue: SetFieldValue;
}
const AwardsSection = ({
  formValues,
  setFieldValue,
}: ResumeAwardsPropTypes) => {
  const [awardList, setAwardList] = useState<AwardObjectType[]>([awardShape]);
  const { activeCards, collapseCard, activateCard, setActiveCards } =
    useCardContext() as Context;

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

  const addAward = (arrayHelpers: FieldArrayRenderProps) => {
    arrayHelpers.unshift({
      awardTitle: "",
      dateAwarded: "",
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
    <FieldArray
      name="awards.awards.value"
      render={(arrayHelpers) => (
        <div className="w-full flex flex-col gap-3 items-start">
          <CurvedButton
            className="bg-primary text-white flex gap-3 w-fit"
            py={"1"}
            onClick={() => {
              addAward(arrayHelpers);
            }}
          >
            <p>Add Award</p>
            <Add />
          </CurvedButton>
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
                setFieldValue={setFieldValue}
                activateCard={() => showCard(index)}
                collapse={collapse}
                collapsed={activeCards.findIndex((card) => card === index) < 0}
              />
            ))}
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
  setFieldValue: SetFieldValue;
  activateCard: (id: number) => void;
  collapse: (id?: number) => void;
  collapsed: boolean;
}

const Award = ({
  awardTitle,
  dateAwarded,
  handleAwardField,
  id,
  index,
  numberOfAwards,
  handleDeleteEntry,
  setFieldValue,
  activateCard,
  collapse,
  collapsed,
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
      collapsed={collapsed}
      title={`Award ${awardTitle}`}
      // subtitle={`Role  ${role}`}
      collapse={() => collapse(index)}
      activateCard={(index) => activateCard(index)}
    >
      <div className="flex gap-3 flex-wrap">
        <div className="flex-1 min-w-fit max-w-[700px] w-fit">
          {/* <p className={`capitalize ${secTextColor}`}>Award Title</p> */}

          <FmkInput
            placeholder="Award Title"
            id="awardTitle"
            // label="Award Title"
            name={`awards.awards.value[${index}].awardTitle.value`}
            title="Award Title"
            label={
              <p>
                What is the{" "}
                <span className={cn(`font-semibold ${pryTextColor}`)}>
                  title of your award
                </span>
                ?
              </p>
            }
            className="flex-1"
            optional
          />
        </div>

        <div className="flex-1 min-w-fit max-w-[700px] w-fit">
          <FmkInput
            inputProps={{
              placeholder: "Date of Award",
              id: "awardDate",
              name: `awards.awards.value[${index}].dateAwarded.value`,
            }}
            inputComp={DateInput}
            name={`awards.awards.value[${index}].dateAwarded.value`}
            setFieldValue={setFieldValue}
            title="Award Date"
            label={
              <p className={`capitalize ${pryTextColor} font-semibold`}>
                Award Date
              </p>
            }
            optional
          />
        </div>
      </div>
    </AddSectionCard>
  );
};

export default AwardsSection;
