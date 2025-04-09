import { gradientGreenToPurple } from "@/assets/css/tailwindcss";
import Button from "@/components/buttons/Button";
import CurvedButton from "@/components/buttons/CurvedButton";
import FmkInput from "@/components/formik/FmkInput";
import { RichInput } from "@/components/inputs/RichInput";
import TextAreaCustom from "@/components/inputs/TextAreaCustom";
import {
  ErrorType,
  ExperienceType,
  SetFieldValue,
  SingleExperienceType,
} from "@/shared/types/formTypes";
import { AutoFixHigh, DragIndicator, Remove } from "@mui/icons-material";
import { arrayMoveImmutable } from "array-move";
import { FieldArrayRenderProps } from "formik";
import React, { ChangeEventHandler, useEffect, useState } from "react";
import {
  SortableContainer,
  SortableContainerProps,
  SortableElement,
  SortableElementProps,
  SortableHandle,
} from "react-sortable-hoc";

export type HandleDeleteExperienceType = ({
  activityId,
  experienceId,
}: {
  activityId: string;
  experienceId: string;
}) => void;

type ExperienceActivityPropTypes = {
  companyName: string;
  activityId: string;
  experienceId: string;
  activity: { id: string; value: string };
  handleExperienceActivity: ChangeEventHandler<HTMLTextAreaElement>;
  numberOfActivities: number;
  handleDeleteActivity: HandleDeleteExperienceType;
  activityIndex: number;
  experienceIndex: number;
  setFieldValue: SetFieldValue;
};

export type ExperienceActivityListProps = {
  experienceDescriptions: Array<{
    value?: string;
    id?: string;
    error?: ErrorType;
  }>;
  experienceId: string;
  handleExperienceActivity: ChangeEventHandler<HTMLTextAreaElement>;
  handleDeleteActivity: HandleDeleteExperienceType;
  companyName: string;
  handleSortList: ({
    experienceId,
    newList,
  }: {
    experienceId: string;
    newList: SingleExperienceType["experienceDescriptions"];
  }) => void;
  experienceIndex: number;
  arrayHelpers: FieldArrayRenderProps;
  setFieldValue: SetFieldValue;
};

const DragHandle = SortableHandle(() => <DragIndicator />);

const ExperienceActivity: React.ComponentClass<any & SortableElementProps> =
  SortableElement(
    ({
      companyName,
      activityId,
      activity,
      experienceId,
      handleExperienceActivity,
      numberOfActivities,
      handleDeleteActivity,
      activityIndex,
      experienceIndex,
      setFieldValue,
    }: ExperienceActivityPropTypes) => {
      const handleDelete = () => {
        handleDeleteActivity({ activityId, experienceId });
      };

      // console.log(activityIndex)
      return (
        <div className="flex flex-row w-full">
          <div className="flex flex-col gap-5 items-start flex-1">
            <div className="flex-1 flex flex-col">
              <div className="relative w-full">
                {numberOfActivities && numberOfActivities > 1 && (
                  <Button
                    className="flex gap-2 text-red-400 float-right"
                    onClick={handleDelete}
                  >
                    <Remove />
                    <p>Delete</p>
                  </Button>
                )}
              </div>
              <div className={"flex gap-1"}>
                <div
                  className={
                    "text-grey_icon/60 dark:text-dark_primary_text/60 cursor-pointer"
                  }
                >
                  <DragHandle />
                </div>
                <FmkInput
                  name={`experience.experience.value[${experienceIndex}].experienceDescriptions.value[${activityIndex}].value`}
                  inputProps={{
                    placeholder: `Describe a work activity or responsibility ${
                      companyName && `at ${companyName}`
                    }...`,
                    minRows: 3,
                    // id:{activityId},
                    // value:{`${activity.value}`}
                    // handleChange:{handleExperienceActivity},
                    content: activity.value,
                    className: "",
                    name: `experience.experience.value[${experienceIndex}].experienceDescriptions.value[${activityIndex}].value`,
                  }}
                  inputComp={RichInput}
                  setFieldValue={setFieldValue}
                />
              </div>
            </div>

            <CurvedButton
              className={`${gradientGreenToPurple} flex gap-3 justify-center items-center text-white text-sm font-medium  whitespace-nowrap h-fit`}
              py={"1"}
            >
              <p className="hidden md:flex">iModify</p>
              <AutoFixHigh />
            </CurvedButton>
          </div>
        </div>
      );
    }
  );

const Container: React.ComponentClass<any> = SortableContainer(
  ({ children }: { children: any }) => {
    return <div className="w-full">{children}</div>;
  }
);

//ACTIVITY LIST
export const ExperienceActivityList = React.memo(
  ({
    experienceDescriptions,
    experienceId,
    handleExperienceActivity,
    companyName,
    handleDeleteActivity,
    handleSortList,
    experienceIndex,
    arrayHelpers,
    setFieldValue,
  }: ExperienceActivityListProps) => {
    const sortList = ({
      oldIndex,
      newIndex,
    }: {
      oldIndex: number;
      newIndex: number;
    }) => {
      console.log(oldIndex);
      handleSortList({
        experienceId: `${experienceIndex}`,
        newList: arrayMoveImmutable(experienceDescriptions, oldIndex, newIndex),
      });
    };

    return (
      <Container useDragHandle onSortEnd={sortList}>
        <div className="flex flex-col gap-6">
          {experienceDescriptions &&
            experienceDescriptions.map((activity, index) => {
              return (
                <ExperienceActivity
                  activityId={activity.id}
                  experienceId={experienceId}
                  handleExperienceActivity={handleExperienceActivity}
                  activity={activity}
                  companyName={companyName}
                  numberOfActivities={experienceDescriptions?.length}
                  handleDeleteActivity={() => {
                    arrayHelpers.remove(index);
                  }}
                  index={index}
                  activityIndex={index}
                  experienceIndex={experienceIndex}
                  key={`item-${index}`}
                  setFieldValue={setFieldValue}
                />
              );
            })}
        </div>
      </Container>
    );
  }
);
export default ExperienceActivity;
