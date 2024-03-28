type GetResumeTemplatesParamType = {
  start: number;
  offset: number;
  location?: string;
};

export type ResumeTemplateType = {
  id: number;
  jobTitle: string;
  pageSize: number;
  atsFriendly: boolean;
  company: string;
};

export function getResumeTemplates({
  start,
  offset,
}: GetResumeTemplatesParamType) {
  const allResumes: Array<ResumeTemplateType> = require("@/utils/dummyData/resumeSamples.json");

  return allResumes.slice(start, offset + start);
}
