import { ResumeFormCompType } from "./componentTypes";

export interface ResumeFilterQueryType {
  resumeCategory: {
    type: string;
    value: string;
  } | null;
  pageSize: number | null;
  atsFriendly: boolean | null;
} 

export interface SavedResume{
  id?: string;
  resumeType?: 'job' | 'school';
  templateSelected?: string;
  companyName?: string,
  schoolName?: string,
  jobTitle?: string,
  dateUpdated?: string;
  professionalTitle?: string;

}