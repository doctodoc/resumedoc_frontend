export interface ResumeFilterQueryType {
  resumeCategory: {
    type: string;
    value: string;
  } | null;
  pageSize: number | null;
  atsFriendly: boolean | null;
} 
