import {
  AwardType,
  CertificateType,
  ContactType,
  EducationType,
  ExperienceType,
  HeaderType,
  SkillsType,
  SummaryType,
} from "@/shared/types/formTypes";

export interface ResumeForm {
  header: HeaderType;
  contact: ContactType;
  summary: SummaryType;
  experience: ExperienceType;
  skills: SkillsType;
  education?: EducationType;
  awards?: AwardType;
  certificate?: CertificateType;
  
}

export interface AddResumeSectionPayload {
    formKey: keyof ResumeForm
    value: ResumeForm[keyof ResumeForm]
}