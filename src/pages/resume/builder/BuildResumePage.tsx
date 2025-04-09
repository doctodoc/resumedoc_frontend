import { CollapsedProvider } from "@/components/card/CollapsedCard";
import CreateCoverLetter from "@/containers/coverLetter/createCoverLetter/CreateCoverLetter";
import BuilderLayout, {
  BuilderLayoutProps,
} from "@/pages/resume/builder/builderLayout/BuilderLayout";
import AwardsSection from "@/pages/resume/builder/_comps/resume-forms/sections/AwardsSection";
import CerificateSection from "@/pages/resume/builder/_comps/resume-forms/sections/CertificateSection";
import ContactSection from "@/pages/resume/builder/_comps/resume-forms/sections/ContactSection";
import EducationSection from "@/pages/resume/builder/_comps/resume-forms/sections/EducationSection";
import ExperienceSection from "@/pages/resume/builder/_comps/resume-forms/sections/experienceSection/ExperienceSection";
import InvolvementSection from "@/pages/resume/builder/_comps/resume-forms/sections/InvolvementSection";
import ProjectSection from "@/pages/resume/builder/_comps/resume-forms/sections/projectsSection/ProjectsSection";
import SkillsSection from "@/pages/resume/builder/_comps/resume-forms/sections/SkillsSection";
import SummarySection from "@/pages/resume/builder/_comps/resume-forms/sections/SummarySection";
import React, { memo } from "react";
import DialogProvider from "@/providers/DialogProvider";

const sectionTabs: BuilderLayoutProps["sectionTabs"] = [
  { title: "contact", id: "contact", comp: ContactSection },
  { title: "summary", id: "summary", comp: SummarySection },
  { title: "experience", id: "experience", comp: ExperienceSection },
  { title: "projects", id: "projects", comp: ProjectSection },
  { title: "skills", id: "skills", comp: SkillsSection },
  { title: "certificate", id: "certificate", comp: CerificateSection },
  { title: "education", id: "education", comp: EducationSection },
  { title: "awards", id: "awards", comp: AwardsSection },
  {
    title: "involvement or volunteering",
    id: "involvement",
    comp: InvolvementSection,
  },
  // { title: "finishing up & reviewing", id: "reviewing", comp: ReviewSection },
  { title: "cover letter", id: "coverLetter", comp: CreateCoverLetter },
];

const sectionTabsWithCollapse = sectionTabs.map((sectionTab) => {
  const Comp = sectionTab.comp;
  return {
    ...sectionTab,
    comp: (P: any) => (

      <CollapsedProvider>
        <Comp {...P} />
      </CollapsedProvider>

    ),
  };
});

const CreateResumePage = () => {
  return <BuilderLayout sectionTabs={sectionTabsWithCollapse}></BuilderLayout>;
};

export default memo(CreateResumePage);
