import { FormikErrors } from "formik";
import { ResumeYearsOfExperience } from "../enums/resumeEnums";
import { ResumeFormCompType } from "./componentTypes";

export interface ExperienceType {
  experience: Array<SingleExperienceType>;
}

export interface SingleExperienceType {
  id: string;
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  experienceDescriptions: Array<{ value?: string; id?: string; error?: ErrorType;
  }>;
}

export interface SingleProjectType {
  id: string;
  projectName: string;
  role: string;
  startDate: string;
  endDate: string;
  projectDescriptions: Array<{ value?: string; id?: string; error?: ErrorType;
  }>;
}

export interface HeaderType {
  fullName: string;
  jobTitle: string;
  avatar: string;
}

export interface ContactType {
  emailAddress: string;
  location?: string;
  phoneNumber?: string;
  websiteLinks?: Array<{
    type: string;
    url: string;
  }>;
}

export interface SummaryType {
  summary: string;
  experienceLevel: string;
}

export interface EducationObjectType {
  schoolName: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface EducationType {
  education: Array<EducationObjectType>;
}

export interface CertificateObjectType {
  certificateTitle: string; dateAwarded: string 
}

export interface CertificateType {
  certificates: Array<CertificateObjectType>;
}

export interface AwardObjectType {
  awardTitle: string; dateAwarded: string 
}

export interface InvolvementObjectType {
  organizationName: string;
  role: string;
  startDate: string;
  endDate: string;
}

export interface InvolvementType {
  involvement: Array<InvolvementObjectType> 
}

export interface AwardType {
  awards: Array<AwardObjectType>;
}


export interface SkillsType {
  skills: Array<{ id: string; value: string }>;
}

export type ErrorType =
  | [
      {
        error: string;
        message: string;
      }
    ]
  | null;

export type SetFieldValue = (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void | FormikErrors<ResumeFormCompType
>>