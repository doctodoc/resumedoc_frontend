import CurvedButton from "@/components/buttons/CurvedButton";
import AddSectionCard from "@/components/card/AddSectionCard";
import DateInput from "@/components/inputs/DateInput";
import { ExperienceType, SingleExperienceType } from "@/shared/types/formTypes";
import { Add, Remove } from "@mui/icons-material";
import React, { ChangeEventHandler, useEffect, useState, memo } from "react";
import { v4 as uuidv4 } from "uuid";
import ExperienceActivity, {
  ExperienceActivityList,
  ExperienceActivityListProps,
  HandleDeleteExperienceType,
} from "./ExperienceActivity";
import FmkInput from "@/components/formik/FmkInput";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { FieldArray, FieldArrayRenderProps, FormikErrors } from "formik";

interface ResumeExperiencePropType {
  formValues: ResumeFormCompType;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<ResumeFormCompType>>;
}

const ResumeExperience = ({
  formValues,
  setFieldValue,
}: ResumeExperiencePropType) => {
  const [experienceList, setExperienceList] = useState<SingleExperienceType[]>(
    []
  );
  const experiencesList = formValues?.experience?.experience?.value
    ? formValues?.experience?.experience?.value
    : [];

  const addWorkExperience = (arrayHelpers: FieldArrayRenderProps) => {
    arrayHelpers.push(experienceShape);
    // setExperienceList([
    //   ...experienceList,
    //   { ...experienceShape, id: uuidv4() },
    // ]);
  };

  const handleDeleteExperience = (id: string) => {
    setExperienceList(experienceList.filter((exp) => id !== exp.id));
  };

  const addActivity = (id: string) => {
    setExperienceList(
      experienceList.map((experience) =>
        experience.id === id
          ? {
              ...experience,
              experienceDescriptions: [
                ...experience["experienceDescriptions"],
                { id: uuidv4(), value: "" },
              ],
            }
          : experience
      )
    );
  };

  const handleDeleteActivity: HandleDeleteExperienceType = ({
    activityId,
    experienceId,
  }) => {
    setExperienceList(
      experienceList.map((experience) =>
        experience.id === experienceId
          ? {
              ...experience,
              experienceDescriptions: experience.experienceDescriptions.filter(
                (desc) => desc.id !== activityId
              ),
            }
          : experience
      )
    );
  };

  const handleExperienceField = ({
    val,
    k,
    id,
    activityId,
  }: {
    val: string; //value of the field
    k: string; //object key
    id: string; //id
    activityId?: string;
  }) => {
    // handles the whole field in experience section
    setExperienceList(
      experienceList.map((experience) => {
        return experience.id === id
          ? k === "experienceDescriptions"
            ? {
                ...experience,
                [k]: experience[k].map((activity) => {
                  return activity.id === activityId
                    ? { ...activity, value: val }
                    : activity;
                }),
              }
            : { ...experience, [k]: val }
          : experience;
      })
    );
  };

  const handleSortList: ExperienceActivityListProps["handleSortList"] = ({
    experienceId,
    newList,
  }) => {
    console.log(newList);
    setFieldValue(
      `experience.experience.value[${experienceId}].experienceDescriptions.value`,
      newList
    );
    // setExperienceList(
    //   experienceList.map((experience) =>
    //     experience.id === experienceId
    //       ? { ...experience, experienceDescriptions: newList }
    //       : experience
    //   )
    // );
  };

  return (
    <div className="w-full flex flex-col items-center gap-7">
      <FieldArray
        name="experience.experience.value"
        render={(arrayHelpers) => (
          <>
            {experiencesList?.map((experience, index) => (
              <Experience
                key={experience.id}
                companyName={
                  experience?.companyName?.value
                    ? experience?.companyName?.value
                    : ""
                }
                jobTitle={
                  experience?.jobTitle?.value ? experience?.jobTitle?.value : ""
                }
                startDate={
                  experience?.startDate?.value
                    ? experience?.startDate?.value
                    : ""
                }
                endDate={
                  experience?.endDate?.value ? experience?.endDate?.value : ""
                }
                index={index}
                experienceDescriptions={
                  experience?.experienceDescriptions?.value
                    ? experience?.experienceDescriptions?.value
                    : []
                }
                handleDeleteEntry={() => {
                  arrayHelpers.remove(index);
                }}
                id={experience.id}
                handleExperienceField={handleExperienceField}
                numberOfExperience={experiencesList.length}
                addActivity={addActivity}
                handleDeleteActivity={() => {}}
                handleSortList={handleSortList}
              />
            ))}
            <CurvedButton
              className="bg-primary text-white flex gap-3"
              py={"2"}
              onClick={() => addWorkExperience(arrayHelpers)}
            >
              <p>Add Experience</p>
              <Add />
            </CurvedButton>
          </>
        )}
      />
    </div>
  );
};

const experienceShape = {
  id: uuidv4(),
  companyName: "",
  jobTitle: "",
  startDate: "",
  endDate: "",
  experienceDescriptions: { value: [{ id: uuidv4(), value: "" }] },
};

export interface ExperiencePropType extends SingleExperienceType {
  handleDeleteEntry: (id: string) => void;
  id: string;
  index: number;
  handleExperienceField: ({
    val,
    k,
    id,
    activityId,
  }: {
    val: string;
    k: string;
    id: string; //experience id
    activityId?: string; //activity id
  }) => void;
  numberOfExperience: number;
  addActivity: (id: string) => void;
  handleDeleteActivity: ({
    activityId,
    experienceId,
  }: {
    activityId: string;
    experienceId: string;
  }) => void;
  handleSortList: ExperienceActivityListProps["handleSortList"];
}

const Experience = memo(
  ({
    companyName,
    jobTitle,
    startDate,
    endDate,
    handleDeleteEntry,
    experienceDescriptions,
    id,
    index,
    handleExperienceField,
    numberOfExperience,
    addActivity,
    handleDeleteActivity,
    handleSortList,
  }: ExperiencePropType) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      handleExperienceField({ val: e.target.value, k: e.target.id, id });
    };

    const handleExperienceActivity: ChangeEventHandler<HTMLTextAreaElement> = (
      ev
    ) => {
      const { value, id: activityId } = ev.target;
      console.log(id);
      handleExperienceField({
        val: value,
        id,
        k: "experienceDescriptions",
        activityId,
      });
    };

    const handleAddActivity = (id: string) => {
      console.log("added activity");
      addActivity(id);
    };

    return (
      <AddSectionCard
        handleDeleteEntry={handleDeleteEntry}
        id={id}
        totalCard={numberOfExperience}
        className={"flex flex-col gap-3 md:gap-5"}
      >
        <div className="flex justify-between gap-4">
          {/* company */}
          <FmkInput
            placeholder="Name of Company"
            id="companyName"
            label={"Company Name"}
            name={`experience.experience.value[${index}].companyName.value`}
            className="flex-1"
            title="Name of Company"
          />

          {/* role */}
          <FmkInput
            placeholder="Job Title"
            id="jobTitle"
            label="Job Title"
            name={`experience.experience.value[${index}].jobTitle.value`}
            className="flex-1"
            title="Job Title"
          />
        </div>

        <div className="flex gap-4">
          {/* period */}
          <FmkInput
            inputProps={{
              placeholder: "Start Date",
              id: "startDate",
              name: `experience.experience.value[${index}].startDate`,
            }}
            name={`experience.experience.value[${index}].startDate.value`}
            inputComp={DateInput}
          />

          <FmkInput
            name={`experience.experience.value[${index}].endDate`}
            inputProps={{
              placeholder: "End Date",
              id: "endDate",
              name: `experience.experience.value[${index}].endDate`,
            }}
            inputComp={DateInput}
          />
        </div>

        <FieldArray
          name={`experience.experience.value[${index}].experienceDescriptions.value`}
          render={(arrayHelpers) => (
            <>
              <div className="flex flex-col gap-3">
                <h1 className="text-secondary_text dark:text-dark_secondary_text">
                  Describe your work experience
                </h1>

                <ExperienceActivityList
                  experienceDescriptions={experienceDescriptions}
                  experienceId={id}
                  handleExperienceActivity={handleExperienceActivity}
                  companyName={companyName}
                  handleDeleteActivity={handleDeleteActivity}
                  handleSortList={handleSortList}
                  experienceIndex={index}
                  arrayHelpers={arrayHelpers}
                />

                {/* {experienceDescriptions.map((activity, index) => {
            return (
              <ExperienceActivity
                activityId={activity.id}
                experienceId={id}
                handleExperienceActivity={handleExperienceActivity}
                activity={activity}
                companyName={companyName}
                numberOfActivities={experienceDescriptions.length}
                handleDeleteActivity={handleDeleteActivity}
              />
            );
          })} */}

                {/* <SortableList items={
            
          }/> */}
              </div>

              <div>
                <button
                  className="text-banner_purple text-base font-medium flex gap-3"
                  onClick={() => {
                    arrayHelpers.push({ id: uuidv4(), value: "" });
                  }}
                >
                  <p>Add Activity</p>
                  <Add />
                </button>
              </div>
            </>
          )}
        />
      </AddSectionCard>
    );
  }
);

export default ResumeExperience;
