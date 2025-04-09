import {
  gradientGreenToPurple,
  greyBorder,
  pryTextColor,
  secTextColor,
  widgetBorder,
} from "@/assets/css/tailwindcss";
import BubbleButton from "@/components/buttons/BubbleButton";
import CurvedButton from "@/components/buttons/CurvedButton";
import RoundedButton from "@/components/buttons/RoundedButton";
import WidgetCard from "@/components/card/WidgetCard";
import CustomSelectInput from "@/components/inputs/CustomSelectInput";
import CustomTextField from "@/components/inputs/CustomTextField";
import DropDownSearch from "@/components/inputs/DropDownSearch";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { cn } from "@/utils";
import { AutoAwesome, Edit } from "@mui/icons-material";
import { FieldArray, FieldArrayRenderProps } from "formik";
import React, { ChangeEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type ResumeSkillsPropType = {
  formValues: ResumeFormCompType;
};

type SkillsType = {
  id: string;
  name: string;
};

type AddSkillParam = {
  arrayHelpers: FieldArrayRenderProps;
  skillList?: Array<{ id?: string; value?: string }>;
};

const initialSkills = [{ id: "communication", name: "Communication" }];
const skillLevelsOption = [
  { display: "Beginner", id: "beginner" },
  {
    display: "Amateur",
    id: "amateur",
  },
  {
    display: "Competent",
    id: "competent",
  },
  {
    display: "Proficient",
    id: "proficient",
  },
  {
    display: "Expert",
    id: "expert",
  },
];
const skillCategoryOption = [
  { display: "Technical", id: "technical" },
  {
    display: "Language",
    id: "language",
  },
  {
    display: "Interest",
    id: "interest",
  },
  {
    display: "Relevant",
    id: "relevant",
  },
  // {
  //   display: "Expert",
  //   id: "expert",
  // },
];

const SkillsSection = ({ formValues }: ResumeSkillsPropType) => {
  const [skills, setSkills] = useState<Array<SkillsType>>(initialSkills);
  const [skillField, setSkillField] = useState("");
  const [skillLevel, setSkillLevel] = useState("");

  const [skillCategory, setSkillCategory] = useState("");
  // const []

  const handleRemoveSkill = (id: string) => {
    setSkills(skills.filter((exp, i) => id !== `${exp.id}`));
  };

  const handleSkill = (e: any) => {
    const val = e.target.value;
    // if (!value) return;
    // console.log(value);
    setSkillField(val);
  };

  const handleSkillLevel = (id: string) => {
    setSkillLevel(id);
  };
  const handleSkillCategory = (id: string) => {
    setSkillCategory(id);
  };

  const addSkill = ({ arrayHelpers, skillList }: AddSkillParam) => {
    if (!skillList || !skillField.trim()) return;
    const skillIndex = skillList.findIndex(
      (skill) => skill.id === skillField.toLowerCase()
    );
    if (skillIndex === -1) {
      arrayHelpers.push({
        id: skillField,
        value: skillField,
        skillLevel,
        category: skillCategory,
      });
    } else {
      arrayHelpers.replace(skillIndex, {
        id: skillField,
        value: skillField,
        skillLevel,
        category: skillCategory,
      });
    }
    setSkillField("");
    setSkillLevel("");
  };
  const handleSkillValues = ({
    skillField,
    skillLevel,
  }: {
    skillField?: string;
    skillLevel?: string;
  }) => {
    if (skillField) {
      setSkillField(skillField);
    }
    if (skillLevel) {
      setSkillLevel(skillLevel);
    }
  };
  return (
    <div className="flex flex-col gap-3 w-full ">
      <FieldArray
        name={"skills.skills.value"}
        render={(arrayHelpers) => {
          const skillList = formValues?.skills?.skills?.value;

          return (
            <div className="w-full flex flex-col gap-4">
              <WidgetCard>
                <div className="flex flex-col gap-5 xl:gap-9 w-full ">
                  <section className="w-full flex flex-col">
                    {/* <div className="w-full flex justify-center ">
                      <RoundedButton
                        className={`w-full max-w-[500px] ${gradientGreenToPurple} flex gap-3 justify-center text-white text-base font-medium`}
                        py={"2"}
                      >
                        <p>AI Generate skills to match role</p>
                        <AutoAwesome />
                      </RoundedButton>
                    </div> */}

                    <div></div>
                  </section>

                  {/* SKILL  */}
                  <div className="flex flex-col gap-1">
                    <p className={`capitalize ${secTextColor}`}></p>
                    <p
                      className={`capitalize ${secTextColor} whitespace-nowrap`}
                    >
                      What
                      <span className={cn(`font-semibold ${pryTextColor}`)}>
                        {" skill "}
                      </span>
                      do you have that is
                      <span className={cn(`font-semibold ${pryTextColor}`)}>
                        {"  relevant to this role "}
                      </span>
                      ?
                    </p>
                    <CustomTextField
                      id="skillName"
                      name="skill-name"
                      value={skillField}
                      onChange={handleSkill}
                      // className="min-w-[200px] max-w-[500px] w-full"
                      type={"text"}
                      // label={label}
                      containerClass={"min-w-[200px] max-w-[500px] w-full"}
                      placeholder="Enter skill relevant to this role"
                      // adornment={adornment}
                      // adornmentPosition={adornmentPosition}
                      // {...field}
                    />
                    {/* <DropDownSearch
                      placeholder="Enter skill relevant to this role"
                      id="skillName"
                      name="skill-name"
                      value={skillField}
                      onChange={handleSkill}
                      className="min-w-[200px] max-w-[500px] w-full"
                      freeSolo
                      // className={
                      //   "flex-1 w-full min-w-[100px] max-w-[800px]"
                      // }
                      // onChange: (val: any) => void;
                      options={[
                        { display: "Entry Level", id: "entryLevel" },
                        {
                          display: "Intermediate Level",
                          id: "intermediateLevel",
                        },
                      ]}
                      fullWidth
                    /> */}
                  </div>

                  {/* SKILL CATEGORY */}
                  <div className="flex flex-col gap-1">
                    <p
                      className={`capitalize ${secTextColor} whitespace-nowrap`}
                    >
                      What is the
                      <span className={cn(`font-semibold ${pryTextColor}`)}>
                        {" skill category "}
                      </span>
                      ?
                    </p>
                    <CustomSelectInput
                      className="min-w-[200px] max-w-[500px] w-full"
                      onChange={handleSkillCategory}
                      value={skillCategory}
                      dropDownItems={skillCategoryOption}
                      id="resume_experience_level"
                      name="summary.experienceLevel.value"
                      label="Experience Level"
                      placeholder="Select Years of Experience or Level of Experience"
                      defaultValue="technical"
                      // onChange= setFieldValue
                      // value= formValues
                    />
                  </div>

                  {/* SKILL LEVEL */}
                  <div className="flex flex-col gap-1">
                    <p
                      className={`capitalize ${secTextColor} whitespace-nowrap`}
                    >
                      What is your
                      <span className={cn(`font-semibold ${pryTextColor}`)}>
                        {" skill level "}
                      </span>
                      ?
                    </p>
                    <CustomSelectInput
                      className="min-w-[200px] max-w-[500px] w-full"
                      onChange={handleSkillLevel}
                      value={skillLevel}
                      dropDownItems={skillLevelsOption}
                      id="resume_skill_level"
                      name="summary.skillLevel.value"
                      label="Skill Level"
                      placeholder="Select Skill Level"

                      // onChange= setFieldValue
                      // value= formValues
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col items-center mt-5">
                  <CurvedButton
                    className="bg-black text-white whitespace-nowrap w-fit"
                    py={"1"}
                    onClick={() => {
                      addSkill({ arrayHelpers, skillList });
                    }}
                  >
                    Add Skill
                  </CurvedButton>
                </div>
              </WidgetCard>
              <section className="gap-3 mb-4 xl:mb-6">
                {skillList && Boolean(skillList.length) ? (
                  <div>
                    <div className={`${secTextColor} mb-2`}>
                      <p>Relevant skills</p>
                    </div>

                    <div className="flex flex-wrap gap-3 ">
                      {skillList.map((skill, index) =>
                        skill.value ? (
                          <BubbleButton
                            key={index}
                            pop={() => {
                              arrayHelpers.remove(index);
                            }}
                            id={skill.id ? skill.id : uuidv4()}
                            className={`${pryTextColor} bg flex items-center border-[1px] ${widgetBorder} w-fit`}
                            onClick={() =>
                              handleSkillValues({
                                skillField: skill?.value,
                                skillLevel: skill?.skillLevel,
                              })
                            }
                          >
                            <div className="flex gap-1 items-center">
                              <Edit className="text-sm" />

                              <p>{skill.value}</p>
                              {/* {skill.skillLevel && <p>-</p>} */}
                              {skill.skillLevel && (
                                <p className={cn(`${secTextColor} italic`)}>
                                  - {skill?.skillLevel}
                                </p>
                              )}
                            </div>
                          </BubbleButton>
                        ) : null
                      )}
                    </div>
                  </div>
                ) : (
                  <div
                    className={`w-full flex items-center justify-center p-4 border-dashed ${greyBorder} ${secTextColor}`}
                  >
                    No skill selected yet, Your skills will appear here.
                  </div>
                )}
              </section>
            </div>
          );
        }}
      />
    </div>
  );
};

export default SkillsSection;
