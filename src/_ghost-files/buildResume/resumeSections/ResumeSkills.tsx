import { gradientGreenToPurple } from "@/assets/css/tailwindcss";
import BubbleButton from "@/components/buttons/BubbleButton";
import CurvedButton from "@/components/buttons/CurvedButton";
import RoundedButton from "@/components/buttons/RoundedButton";
import DropDownSearch from "@/components/inputs/DropDownSearch";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { AutoAwesome } from "@mui/icons-material";
import { FieldArray } from "formik";
import React, { ChangeEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";

type ResumeSkillsPropType = {
  formValues: ResumeFormCompType;
};

type SkillsType = {
  id: string;
  name: string;
};

const initialSkills = [{ id: "communication", name: "Communication" }];

const ResumeSkills = ({ formValues }: ResumeSkillsPropType) => {
  const [skills, setSkills] = useState<Array<SkillsType>>(initialSkills);
  const [skillField, setSkillField] = useState("");

  const handleRemoveSkill = (id: string) => {
    setSkills(skills.filter((exp, i) => id !== `${exp.id}`));
  };

  const handleSkill = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setSkillField(value);
  };

  const addSkill = () => {};
  return (
    <div className="flex flex-col gap-3">
      <FieldArray
        name={"skills.skills.value"}
        render={(arrayHelpers) => (
          <div>
            <section className="flex gap-3">
              <DropDownSearch
                placeholder="Enter skill relevant to this role"
                id="jobTitle"
                value={skillField}
                handleChange={handleSkill}
                className={"w-full min-w-[400px]"}
              />
              <CurvedButton
                className="bg-black text-white"
                py={"1"}
                onClick={() => {
                  arrayHelpers.push({ id: skillField, value: skillField });
                }}
              >
                Add Skill
              </CurvedButton>
            </section>

            <section className="w-full flex justify-center my-3">
              <RoundedButton
                className={`w-full max-w-[500px] ${gradientGreenToPurple} flex gap-3 justify-center text-white text-base font-medium`}
                py={"2"}
              >
                <p>Auto-Generate skills to match role</p>
                <AutoAwesome />
              </RoundedButton>
            </section>
            <section className="flex flex-wrap gap-3">
              {formValues?.skills?.skills?.value &&
                formValues?.skills?.skills?.value.map((skill, index) =>
                  skill.value ? (
                    <BubbleButton
                      key={skill.id}
                      pop={() => {
                        arrayHelpers.remove(index);
                      }}
                      id={skill.id ? skill.id : uuidv4()}
                      className={
                        "text-banner_purple bg flex gap-3 border-[1px] border-banner_purple w-fit"
                      }
                    >
                      {skill.value}
                    </BubbleButton>
                  ) : null
                )}
            </section>
          </div>
        )}
      />
    </div>
  );
};

export default ResumeSkills;
