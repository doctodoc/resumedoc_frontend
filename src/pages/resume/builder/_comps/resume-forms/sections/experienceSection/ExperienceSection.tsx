import CurvedButton from "@/components/buttons/CurvedButton";
import AddSectionCard from "@/components/card/AddSectionCard";
import DateInput from "@/components/inputs/DateInput";
import {
  ExperienceType,
  SetFieldValue,
  SingleExperienceType,
} from "@/shared/types/formTypes";
import { Add, Remove } from "@mui/icons-material";
import React, {
  ChangeEventHandler,
  useEffect,
  useState,
  memo,
  useContext,
} from "react";
import { v4 as uuidv4 } from "uuid";
import FmkInput from "@/components/formik/FmkInput";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { FieldArray, FieldArrayRenderProps, FormikErrors } from "formik";
import {
  ExperienceActivityList,
  ExperienceActivityListProps,
  HandleDeleteExperienceType,
} from "./ExperienceActivity";
import { pryTextColor, secTextColor } from "@/assets/css/tailwindcss";
import {
  CollapsedContext,
  Context,
  useCardContext,
} from "@/components/card/CollapsedCard";
import DropDownSearch from "@/components/inputs/DropDownSearch";
import { cn } from "@/utils";
import { Button } from "@/components/ui/Button";

interface ResumeExperiencePropType {
  formValues: ResumeFormCompType;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<ResumeFormCompType>>;
}

const ExperienceSection = ({
  formValues,
  setFieldValue,
}: ResumeExperiencePropType) => {
  const [experienceList, setExperienceList] = useState<SingleExperienceType[]>(
    []
  );
  const { activeCards, collapseCard, activateCard, setActiveCards } =
    useCardContext() as Context;

  const experiencesList = formValues?.experience?.experience?.value
    ? formValues?.experience?.experience?.value
    : [];

  const addWorkExperience = (arrayHelpers: FieldArrayRenderProps) => {
    arrayHelpers.unshift({
      id: uuidv4(),
      companyName: { value: "" },
      jobTitle: { value: "" },
      startDate: { value: "" },
      endDate: { value: "" },
      experienceDescriptions: { value: [{ id: uuidv4(), value: "" }] },
    });
    if (setActiveCards) {
      setActiveCards([0]);
    }
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
    setFieldValue(
      `experience.experience.value[${experienceId}].experienceDescriptions.value`,
      newList
    );
  };

  const showCard = (i: number) => {
    if (activateCard) {
      console.log(i);
      activateCard(i);
    }
  };

  const collapse = (id?: number) => {
    console.log(collapseCard);
    if (collapseCard && typeof id === "number") {
      console.log("sth");
      collapseCard(id);
    }
  };

  useEffect(() => {
    console.log(activeCards);
  });
  return (
    <div className="w-full flex flex-col items-center gap-7">
      <FieldArray
        name="experience.experience.value"
        render={(arrayHelpers) => (
          <div className={"flex flex-col items-start gap-3 w-full"}>
            <Button
              className="text-primary flex gap-3 items-center text-base"
              // py={"1"}
              variant={"primary plain"}
              onClick={() => addWorkExperience(arrayHelpers)}
            >
              <p>Add Experience</p>
              <Add />
            </Button>
            {experiencesList?.map((experience, index) => (
              <Experience
                key={experience?.id}
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
                numberOfExperience={experiencesList?.length}
                addActivity={addActivity}
                handleDeleteActivity={() => {}}
                handleSortList={handleSortList}
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

export interface ExperiencePropType extends SingleExperienceType {
  handleDeleteEntry: (id: string) => void;
  setFieldValue: SetFieldValue;
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
  activateCard: (id: number) => void;
  collapse: (id?: number) => void;
  collapsed: boolean;
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
    setFieldValue,
    activateCard,
    collapse,
    collapsed,
  }: ExperiencePropType) => {
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

    return (
      <AddSectionCard
        handleDeleteEntry={handleDeleteEntry}
        id={id}
        activateCard={(index) => activateCard(index)}
        totalCard={numberOfExperience}
        className={"flex flex-col gap-3 md:gap-5"}
        collapsed={collapsed}
        title={`Experience ${companyName}`}
        subtitle={`Job title:  ${jobTitle}`}
        collapse={() => collapse(index)}
      >
        <div className="flex justify-between gap-4 flex-wrap">
          <div className="flex-1 min-w-fit max-w-[700px] w-fit">
            {/* <p className={`capitalize ${secTextColor}`}>Company Name</p> */}
            {/* company */}
            <FmkInput
              placeholder="Name of Company"
              id="companyName"
              // label={"Company Name"}
              name={`experience.experience.value[${index}].companyName.value`}
              className="flex-1"
              title="Company Name"
              label={
                <p className={`capitalize ${secTextColor} whitespace-nowrap`}>
                  What is the
                  <span className={cn(`font-semibold ${pryTextColor}`)}>
                    {" name of the company"}
                  </span>
                  ?
                </p>
              }
            />
          </div>

          {/* role */}
          <div className="flex-1 min-w-fit max-w-[700px] w-fit">
            {/* <p className={`capitalize ${secTextColor}`}>Job title</p> */}
            {/* company */}
            <FmkInput
              placeholder="Job Title"
              id="jobTitle"
              // label="Job Title"
              name={`experience.experience.value[${index}].jobTitle.value`}
              className="flex-1"
              title="Job Title"
              label={
                <p className={`capitalize ${secTextColor} whitespace-nowrap`}>
                  What is your
                  <span className={cn(`font-semibold ${pryTextColor}`)}>
                    {" Job title or position "}
                  </span>
                  in this company?
                </p>
              }
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {/* country */}
          <div className="flex-1 min-w-fit max-w-[700px] w-fit ">
            {/* <p className={`capitalize ${secTextColor}`}>Country</p> */}
            <FmkInput
              inputProps={{
                placeholder: "Select country",
                name: `experience.experience.value[${index}].country.value`,
                id: "country",
                className: "w-full",
                freeSolo: true,

                options: [
                  { display: "Entry Level", id: "entryLevel" },
                  { display: "Intermediate Level", id: "intermediateLevel" },
                ],
                fullWidth: true,
              }}
              name={`experience.experience.value[${index}].country.value`}
              inputComp={DropDownSearch}
              setFieldValue={setFieldValue}
              title="Country"
              label={
                <p className={`capitalize ${secTextColor} whitespace-nowrap`}>
                  What
                  <span className={cn(`font-semibold ${pryTextColor}`)}>
                    {" country "}
                  </span>
                  is the company located?
                </p>
              }
              optional
            />
          </div>

          <div className="flex-1 min-w-fit max-w-[700px] w-fit ">
            {/* <p className={`capitalize ${secTextColor}`}>City</p> */}
            <FmkInput
              inputProps={{
                placeholder: "Select city",
                name: `experience.experience.value[${index}].city.value`,
                id: "city",
                className: "w-full",
                freeSolo: true,

                options: [
                  { display: "Entry Level", id: "entryLevel" },
                  { display: "Intermediate Level", id: "intermediateLevel" },
                ],
                fullWidth: true,
              }}
              name={`experience.experience.value[${index}].city.value`}
              inputComp={DropDownSearch}
              setFieldValue={setFieldValue}
              title="city"
              label={
                <p className={`capitalize ${secTextColor} whitespace-nowrap`}>
                  What
                  <span className={cn(`font-semibold ${pryTextColor}`)}>
                    {" city "}
                  </span>
                  is the company located?
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
                name: `experience.experience.value[${index}].startDate.value`,
              }}
              name={`experience.experience.value[${index}].startDate.value`}
              inputComp={DateInput}
              setFieldValue={setFieldValue}
              className="flex-[0.5]"
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
              name={`experience.experience.value[${index}].endDate.value`}
              inputProps={{
                placeholder: "End Date",
                id: "endDate",
                name: `experience.experience.value[${index}].endDate.value`,
              }}
              inputComp={DateInput}
              setFieldValue={setFieldValue}
              className="flex-1"
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

        <FieldArray
          name={`experience.experience.value[${index}].experienceDescriptions.value`}
          render={(arrayHelpers) => (
            <>
              <div className="flex flex-col gap-3">
                <h1 className="text-secondary_text dark:text-dark_secondary_text capitalize">
                  Describe your
                  <span className={cn(`font-semibold ${pryTextColor}`)}>
                    {" work experience"}
                  </span>
                </h1>
                <div className={"flex flex-col items-start w-full"}>
                  {/* <button
                    className="text-primary text-base font-medium flex gap-3"
                    onClick={() => {
                      arrayHelpers.push({ id: uuidv4(), value: "" });
                    }}
                  >
                    <p>Add Activity</p>
                    <Add />
                  </button> */}
                  <ExperienceActivityList
                    experienceDescriptions={experienceDescriptions}
                    experienceId={id}
                    handleExperienceActivity={handleExperienceActivity}
                    companyName={companyName}
                    handleDeleteActivity={handleDeleteActivity}
                    handleSortList={handleSortList}
                    experienceIndex={index}
                    arrayHelpers={arrayHelpers}
                    setFieldValue={setFieldValue}
                  />
                </div>

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
            </>
          )}
        />
      </AddSectionCard>
    );
  }
);

export default ExperienceSection;
