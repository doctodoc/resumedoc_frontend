import { gradientGreenToPurple } from "@/assets/css/tailwindcss";
import Button from "@/components/buttons/Button";
import CurvedButton from "@/components/buttons/CurvedButton";
import FmkInput from "@/components/formik/FmkInput";
import { RichInput } from "@/components/inputs/RichInput";
import TextAreaCustom from "@/components/inputs/TextAreaCustom";
import {
  ErrorType,
  SetFieldValue,
  SingleProjectType,
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

export type HandleDeleteProjectType = ({
  activityId,
  projectId,
}: {
  activityId: string;
  projectId: string;
}) => void;

type ProjectActivityPropTypes = {
  projectName: string;
  activityId: string;
  projectId: string;
  activity: { id: string; value: string };
  handleProjectActivity?: ChangeEventHandler<HTMLTextAreaElement>;
  numberOfActivities: number;
  handleDeleteActivity: HandleDeleteProjectType;
  activityIndex: number;
  projectIndex: number;
  setFieldValue: SetFieldValue;
};

export type ProjectActivityListProps = {
  projectDescriptions: Array<{
    value?: string;
    id?: string;
    error?: ErrorType;
  }>;
  projectId: string;
  handleProjectActivity?: ChangeEventHandler<HTMLTextAreaElement>;
  handleDeleteActivity: HandleDeleteProjectType;
  projectName: string;
  handleSortList: ({
    projectId,
    newList,
  }: {
    projectId: string;
    newList: SingleProjectType["projectDescriptions"];
  }) => void;
  projectIndex: number;
  arrayHelpers: FieldArrayRenderProps;
  setFieldValue: SetFieldValue;
};

const DragHandle = SortableHandle(() => <DragIndicator />);

const ProjectActivity: React.ComponentClass<any & SortableElementProps> =
  SortableElement(
    ({
      projectName,
      activityId,
      activity,
      projectId,
      handleProjectActivity,
      numberOfActivities,
      handleDeleteActivity,
      activityIndex,
      projectIndex,
      setFieldValue,
    }: ProjectActivityPropTypes) => {
      const handleDelete = () => {
        handleDeleteActivity({ activityId, projectId });
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
                  name={`project.project.value[${projectIndex}].projectDescriptions.value[${activityIndex}].value`}
                  inputProps={{
                    placeholder: `Describe a work activity or responsibility ${
                      projectName && `at ${projectName}`
                    }...`,
                    minRows: 3,
                    // id:{activityId},
                    // value:{`${activity.value}`}
                    // handleChange:{handleExperienceActivity},
                    content: activity.value,
                    className: "",
                    name: `project.project.value[${projectIndex}].projectDescriptions.value[${activityIndex}].value`,
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
export const ProjectActivityList = React.memo(
  ({
    projectDescriptions,
    projectId,
    handleProjectActivity,
    projectName,
    handleDeleteActivity,
    handleSortList,
    projectIndex,
    arrayHelpers,
    setFieldValue,
  }: ProjectActivityListProps) => {
    const sortList = ({
      oldIndex,
      newIndex,
    }: {
      oldIndex: number;
      newIndex: number;
    }) => {
      console.log(oldIndex);
      handleSortList({
        projectId: `${projectIndex}`,
        newList: arrayMoveImmutable(projectDescriptions, oldIndex, newIndex),
      });
    };

    return (
      <Container useDragHandle onSortEnd={sortList}>
        <div className="flex flex-col gap-6">
          {projectDescriptions &&
            projectDescriptions.map((activity, index) => {
              return (
                <ProjectActivity
                  activityId={activity.id}
                  projectId={projectId}
                  handleProjectActivity={handleProjectActivity}
                  activity={activity}
                  projectName={projectName}
                  numberOfActivities={projectDescriptions.length}
                  handleDeleteActivity={() => {
                    arrayHelpers.remove(index);
                  }}
                  index={index}
                  activityIndex={index}
                  projectIndex={projectIndex}
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
export default ProjectActivity;
