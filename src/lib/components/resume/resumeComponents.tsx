import { pryTextColor } from "@/assets/css/tailwindcss";
import { MediumIcon, TwitterIcon } from "@/assets/svg";
// import InvolvementSection from "@/containers/resume/createResume/resumeSections/InvolvementSection";
import { ResumeContactInfoEnum } from "@/shared/enums/resumeEnums";
import { ResumeContactInfoTypes, ResumeFormCompType } from "@/shared/types/componentTypes";

import { BusinessCenter, GitHub, LinkedIn } from "@mui/icons-material";

export const resumeContactInfoIcons: ResumeContactInfoTypes = {
  [ResumeContactInfoEnum.github]: GitHub,
  [ResumeContactInfoEnum.linkedIn]: LinkedIn,
  [ResumeContactInfoEnum.portfolioLink]: BusinessCenter,
  [ResumeContactInfoEnum.medium]: MediumIcon,
  [ResumeContactInfoEnum.twitter]: TwitterIcon,
};

export const resumeContactInfoMeta: ResumeContactInfoTypes = {
  [ResumeContactInfoEnum.github]: {
    linkPrefix: "https://github.com/",
    placeholder: "Johnny_codes",
  },
  [ResumeContactInfoEnum.linkedIn]: {
    linkPrefix: "https://linkedin.com/in/",
    placeholder: "Johnny_networks",
  },
  [ResumeContactInfoEnum.portfolioLink]: {
    linkPrefix: "",
    placeholder: "Paste your personal or portfolio link",
  },
  [ResumeContactInfoEnum.medium]: {
    linkPrefix: "https://medium.com/@",
    placeholder: "Johnny_writes",
  },
  [ResumeContactInfoEnum.twitter]: {
    linkPrefix: "https://twitter.com/",
    placeholder: "johnny_tweets",
  },
};


export const checkIfAnyResumeFieldFilled = {
  header: (header: ResumeFormCompType["header"])=>{
    return header?.avatar?.value || header?.fullName?.value || header?.jobTitle?.value

  },
  contact: (contact: ResumeFormCompType["contact"])=>{
    return contact?.city?.value || contact?.country?.value || contact?.emailAddress?.value || contact?.location?.value || contact?.phoneNumber?.value || contact?.websiteLinks?.value?.length
  },
  summary: (summary: ResumeFormCompType["summary"])=>{
    return summary?.summary?.value
  },
  experience: (experience: ResumeFormCompType["experience"])=>{
    return experience?.experience?.value?.length && (
      experience?.experience?.value?.findIndex(experience=>(
        experience?.city?.value || experience?.companyName?.value || experience?.country?.value || experience?.endDate?.value || experience?.startDate?.value || experience?.jobTitle?.value || (experience?.experienceDescriptions?.value && 
          experience?.experienceDescriptions?.value?.findIndex(desc=> (
            desc.value
          )) > -1) 
      )) >= 0
    )
  },
  project: (project: ResumeFormCompType["project"])=>{
    return project?.project?.value?.length && (
      project?.project?.value?.findIndex(project=>(
        project?.projectLink?.value || project?.role?.value || project?.projectName?.value || project?.endDate?.value || project?.startDate?.value || (project?.projectDescriptions?.value && 
          project?.projectDescriptions?.value?.findIndex(desc=> (
            desc.value
          )) > -1) 
      )) >= 0
    )
  },
  skills: (skills: ResumeFormCompType["skills"])=>{
    return skills?.skills?.value?.length && (
      skills?.skills?.value?.findIndex(skills=>(
        skills?.skillLevel || skills?.value 
      )) >= 0
    )
  },
  education: (education: ResumeFormCompType["education"])=>{
    return education?.education?.value?.length && (
      education?.education?.value?.findIndex(education=>(
        education?.city?.value || education?.schoolName?.value || education?.country?.value || education?.endDate?.value || education?.startDate?.value || education?.degree?.value
          )) >= 0
    )
  },
  awards: (awards: ResumeFormCompType["awards"])=>{
    return awards?.awards?.value?.length && (
      awards?.awards?.value?.findIndex(awards=>(
        awards?.awardTitle?.value || awards?.dateAwarded?.value 
      )) >= 0
    )
  },
  involvement: (involvement: ResumeFormCompType["involvement"])=>{
    return involvement?.involvement?.value?.length && (
      involvement?.involvement?.value?.findIndex(involvement=>(
        involvement?.location?.value || involvement?.organizationName?.value || involvement?.role?.value || involvement?.endDate?.value || involvement?.startDate?.value 
      )) >= 0
    )
  },
  certificate: (certificate: ResumeFormCompType["certificate"])=>{
    return certificate?.certificate?.value?.length && (
      certificate?.certificate?.value?.findIndex(certificate=>(
        certificate?.certificateTitle?.value || certificate?.dateAwarded?.value 
      )) >= 0
    )
  },
  
  // experience: ExperienceType;
  // skills: SkillsType;
  // education?: EducationType;
  // awards?: AwardType;
  // certificate?: CertificateType;
}