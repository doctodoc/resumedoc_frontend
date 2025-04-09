import CurvedButton from "@/components/buttons/CurvedButton";
import AddSectionCard from "@/components/card/AddSectionCard";
import DateInput from "@/components/inputs/DateInput";
import { SetFieldValue, SingleProjectType } from "@/shared/types/formTypes";
import { Add, Remove } from "@mui/icons-material";
import React, { ChangeEventHandler, useEffect, useState, memo } from "react";
import { v4 as uuidv4 } from "uuid";
import FmkInput from "@/components/formik/FmkInput";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { FieldArray, FieldArrayRenderProps, FormikErrors } from "formik";
import ProjectActivity, {
  ProjectActivityList,
  ProjectActivityListProps,
  HandleDeleteProjectType,
} from "./ProjectActivity";
import { pryTextColor, secTextColor } from "@/assets/css/tailwindcss";
import {
  Context,
  useCardContext,
} from "@/components/card/CollapsedCard";
import { cn } from "@/utils";

interface ResumeProjectPropType {
  formValues: ResumeFormCompType;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<ResumeFormCompType>>;
}

const ProjectSection = ({
  formValues,
  setFieldValue,
}: ResumeProjectPropType) => {
  const [projectList, setProjectList] = useState<SingleProjectType[]>([]);
  const { activeCards, collapseCard, activateCard, setActiveCards } =
    useCardContext() as Context;
  const projectsList = formValues?.project?.project?.value
    ? formValues?.project?.project?.value
    : [];

  const addProject = (arrayHelpers: FieldArrayRenderProps) => {
    arrayHelpers.unshift({
      id: uuidv4(),
      projectName: { value: "" },
      role: { value: "" },
      startDate: { value: "" },
      endDate: { value: "" },
      projectDescriptions: { value: [{ id: uuidv4(), value: "" }] },
    });
    // setExperienceList([
    //   ...experienceList,
    //   { ...experienceShape, id: uuidv4() },
    // ]);
  };

  const addActivity = (id: string) => {
    setProjectList(
      projectList.map((project) =>
        project.id === id
          ? {
              ...project,
              projectDescriptions: [
                ...project["projectDescriptions"],
                { id: uuidv4(), value: "" },
              ],
            }
          : project
      )
    );
  };

  const showCard = (i: number) => {
    if (activateCard) {
      activateCard(i);
    }
  };

  const collapse = (id?: number) => {
    if (collapseCard && typeof id === "number") {
      console.log(activeCards);
      collapseCard(id);
    }
  };

  const handleSortList: ProjectActivityListProps["handleSortList"] = ({
    projectId,
    newList,
  }) => {
    console.log(newList);
    setFieldValue(
      `project.project.value[${projectId}].projectDescriptions.value`,
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
        name="project.project.value"
        render={(arrayHelpers) => (
          <div className={"flex flex-col items-start gap-3 w-full"}>
            <CurvedButton
              className="bg-primary text-white flex gap-3"
              py={"1"}
              onClick={() => addProject(arrayHelpers)}
            >
              <p>Add Project</p>
              <Add />
            </CurvedButton>
            {projectsList?.map((project, index) => (
              <Project
                key={project.id}
                projectName={
                  project?.projectName?.value ? project?.projectName?.value : ""
                }
                role={project?.role?.value ? project?.role?.value : ""}
                startDate={
                  project?.startDate?.value ? project?.startDate?.value : ""
                }
                endDate={project?.endDate?.value ? project?.endDate?.value : ""}
                index={index}
                projectDescriptions={
                  project?.projectDescriptions?.value
                    ? project?.projectDescriptions?.value
                    : []
                }
                handleDeleteEntry={() => {
                  arrayHelpers.remove(index);
                }}
                id={project.id}
                // handleProjectField={handleProjectField}
                numberOfProject={projectsList.length}
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

export interface ProjectPropType extends SingleProjectType {
  handleDeleteEntry: (id: string) => void;
  id: string;
  index: number;
  handleProjectField?: ({
    val,
    k,
    id,
    activityId,
  }: {
    val: string;
    k: string;
    id: string; //project id
    activityId?: string; //activity id
  }) => void;
  numberOfProject: number;
  addActivity: (id: string) => void;
  handleDeleteActivity: ({
    activityId,
    projectId,
  }: {
    activityId: string;
    projectId: string;
  }) => void;
  handleSortList: ProjectActivityListProps["handleSortList"];
  setFieldValue: SetFieldValue;
  activateCard: (id: number) => void;
  collapse: (id?: number) => void;
  collapsed: boolean;
}

const Project = memo(
  ({
    projectName,
    role,
    startDate,
    endDate,
    handleDeleteEntry,
    projectDescriptions,
    id,
    index,
    handleProjectField,
    numberOfProject,
    addActivity,
    handleDeleteActivity,
    handleSortList,
    setFieldValue,
    activateCard,
    collapse,
    collapsed,
  }: ProjectPropType) => {
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   handleProjectField({ val: e.target.value, k: e.target.id, id });
    // };

    // const handleProjectActivity: ChangeEventHandler<HTMLTextAreaElement> = (
    //   ev
    // ) => {
    //   const { value, id: activityId } = ev.target;
    //   console.log(id);
    //   handleProjectField({
    //     val: value,
    //     id,
    //     k: "projectDescriptions",
    //     activityId,
    //   });
    // };

    return (
      <AddSectionCard
        handleDeleteEntry={handleDeleteEntry}
        id={id}
        totalCard={numberOfProject}
        className={"flex flex-col gap-3 md:gap-5"}
        collapsed={collapsed}
        title={`Project ${projectName}`}
        subtitle={`Role  ${role}`}
        collapse={() => {
          collapse(index);
        }}
        activateCard={(index) => activateCard(index)}
      >
        <div className="flex justify-between gap-4 flex-wrap">
          <div className="flex-1 min-w-fit max-w-[700px] w-fit">
            {/* <p className={`capitalize ${secTextColor}`}>Project Name</p> */}
            {/* project */}
            <FmkInput
              placeholder="Name of Project"
              id="projectName"
              // label={"Project Name"}
              name={`project.project.value[${index}].projectName.value`}
              className="flex-1"
              title="Project Name"
              label={
                <p className={`capitalize ${secTextColor} whitespace-nowrap`}>
                  What is the
                  <span className={cn(`font-semibold ${pryTextColor}`)}>
                    {" name of the Project "}
                  </span>
                  ?
                </p>
              }
            />
          </div>

          <div className="flex-1 min-w-fit max-w-[700px] w-fit">
            {/* <p className={`capitalize ${secTextColor}`}>Role</p> */}
            {/* role */}
            <FmkInput
              placeholder="Project Role"
              id="role"
              // label="Project Role"
              name={`project.project.value[${index}].role.value`}
              className="flex-1"
              title="Project Role"
              label={
                <p className={`capitalize ${secTextColor} whitespace-nowrap`}>
                  What was your
                  <span className={cn(`font-semibold ${pryTextColor}`)}>
                    {" role in this Project "}
                  </span>
                  ?
                </p>
              }
            />
          </div>
        </div>

        <div className="flex-1 min-w-[200px] max-w-[700px]">
          {/* <p className={`capitalize ${secTextColor}`}>Project Link or URL</p> */}
          {/* project LINK*/}
          <FmkInput
            placeholder="Link to Project e.g https://zeusresume.com"
            id="projectLink"
            // label={"Project Link"}
            name={`project.project.value[${index}].projectLink.value`}
            className="flex-1"
            label={
              <p className={`capitalize ${secTextColor} whitespace-nowrap`}>
                Paste a
                <span className={cn(`font-semibold ${pryTextColor}`)}>
                  {" link to the Project "}
                </span>
              </p>
            }
            optional
          />
        </div>

        <div className="flex gap-4 flex-wrap">
          <div className="flex-1 min-w-fit max-w-[700px] w-fit">
            {/* <p className={`capitalize ${secTextColor}`}>Start date</p> */}

            {/* period */}
            <FmkInput
              inputProps={{
                placeholder: "Start Date",
                id: "startDate",
                name: `project.project.value[${index}].startDate.value`,
              }}
              name={`project.project.value[${index}].startDate.value`}
              inputComp={DateInput}
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

            <FmkInput
              name={`project.project.value[${index}].endDate.value`}
              inputProps={{
                placeholder: "End Date",
                id: "endDate",
                name: `project.project.value[${index}].endDate.value`,
              }}
              inputComp={DateInput}
              setFieldValue={setFieldValue}
              label={
                <p className={`capitalize ${secTextColor} whitespace-nowrap`}>
                  <span className={cn(`font-semibold ${pryTextColor}`)}>
                    {"end date "}
                  </span>
                </p>
              }
            />
          </div>
        </div>

        <FieldArray
          name={`project.project.value[${index}].projectDescriptions.value`}
          render={(arrayHelpers) => (
            <>
              <div className="flex flex-col gap-3">
                <h1 className="text-secondary_text dark:text-dark_secondary_text capitalize">
                  Describe your
                  <span className={cn(`font-semibold ${pryTextColor}`)}>
                    {" project experience"}
                  </span>
                </h1>
                <div>
                  {/* <button
                    className="text-primary text-base font-medium flex gap-3"
                    onClick={() => {
                      arrayHelpers.push({ id: uuidv4(), value: "" });
                    }}
                  >
                    <p>Add Activity</p>
                    <Add />
                  </button> */}
                </div>

                <ProjectActivityList
                  projectDescriptions={projectDescriptions}
                  projectId={id}
                  //   handleProjectActivity={handleProjectActivity}
                  projectName={projectName}
                  handleDeleteActivity={handleDeleteActivity}
                  handleSortList={handleSortList}
                  projectIndex={index}
                  arrayHelpers={arrayHelpers}
                  setFieldValue={setFieldValue}
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
            </>
          )}
        />
      </AddSectionCard>
    );
  }
);

export default ProjectSection;
