import { TextareaAutosizeProps } from "@mui/material";
import {
  ChangeEventHandler,
  LegacyRef,
  MouseEventHandler,
  ReactElement,
} from "react";
import { ResumeContactInfoEnum } from "../enums/resumeEnums";
import { Modify } from "./globalTypes";
import { ErrorType } from "./formTypes";
import { ResumeForm } from "@/api/slices/resume/resumeFormData/types";
import { resumeContactInfoIcons } from "@/lib/components/resume/resumeComponents";
import { z } from "zod";

export interface InputFieldPropsType
  extends React.InputHTMLAttributes<HTMLInputElement> {
  // name?: string;
  placeholder?: string;
  title?: string;
  className?: string;
  containerClass?: string;
  type?: string;
  id: string;
  value?: string | number;
  fieldName?: string;
  // error?: FormErrorType[] | null | string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isIdle?: boolean;
  infoModalContent?: string;
  titleClassName?: string;
  min?: number;
  max?: number;
  icon?: any;
  iconPosition?: "left" | "right";
  isOutlined?: boolean;
  autoFocus?: boolean;
  ref?: any;
  handleIconClick?: () => void;
  iconClass?: string;
  minRows?: number;
  borderColor?: string;
  // Array<FormErrorType> | null
}

export type TextAreaPropTypes = TextareaAutosizeProps &
  React.RefAttributes<Element> & {
    placeholder?: string;
    title?: string;
    className?: string;
    containerClass?: string;
    type?: string;
    id: string;
    value?: string | number;
    handleChange?: ChangeEventHandler<HTMLTextAreaElement>;
    minRows?: number;
    isLocked?: boolean;
    unLock?: () => void;
    onChange?: (val: string) => void;
  };

export interface ContainerStylingPropsType {
  px?: string | number;
  py?: string | number;
  fontSize?: string | number;
  fontColor?: string;
  bgColor?: string;
}

export interface FooterLinksDataType {
  category: string;
  links: Array<{ name: string; link: string }>;
}

export interface ResumeContactInfoTypes {
  github?: any;
  linkedIn?: any;
  portfolioLink?: any;
  medium?: any;
  twitter?: any;
}
export interface FormValueType {
  value: string;
  error?: ErrorType;
  alias?: string;
  isIncluded?: boolean;
  isOptional?: boolean;
}
// export type FormHtmlType = Omit<FormValueType, "value">{
//   value: TrustedHTML
// }
export interface ResumeFormCompType {
  header?: {
    fullName: FormValueType;
    jobTitle: FormValueType;
    avatar?: FormValueType;
  };

  contact?: {
    emailAddress: FormValueType;
    location?: FormValueType;
    phoneNumber?: FormValueType;
    websiteLinks?: {
      value?: Array<{
        type?: keyof typeof resumeContactInfoIcons;
        url?: string;
        error?: ErrorType;
      }>;
      error?: ErrorType;
      alias?: string;
    };
    city?: { value?: string; error?: ErrorType; alias?: string };
    country?: { value?: string; error?: ErrorType; alias?: string };
  };

  summary?: {
    summary: FormValueType;
    experienceLevel: { value: string; error: null; alias: string };
  };

  experience?: {
    experience?: {
      value?: Array<{
        id: string;
        companyName?: FormValueType;
        jobTitle?: FormValueType;
        startDate?: FormValueType;
        endDate?: FormValueType;
        location?: FormValueType;
        city?: { value?: string; error?: ErrorType; alias?: string };
        country?: { value?: string; error?: ErrorType; alias?: string };
        experienceDescriptions?: {
          value?: Array<{
            id?: string;
            value?: string;
            error?: ErrorType;
          }>;
          error?: ErrorType;
          alias?: string;
        };
      }>;
      error?: ErrorType;
      alias?: string;
    };
  };

  project?: {
    project?: {
      value?: Array<{
        id: string;
        projectName?: FormValueType;
        projectLink?: FormValueType;
        role?: FormValueType;
        startDate?: FormValueType;
        endDate?: FormValueType;
        projectDescriptions?: {
          value?: Array<{
            id?: string;
            value?: string;
            error?: ErrorType;
          }>;
          error?: ErrorType;
          alias?: string;
        };
      }>;
      error?: ErrorType;
      alias?: string;
    };
  };

  skills?: {
    skills?: {
      value?: {
        id?: string;
        value?: string;
        skillLevel?: string;
        category?: string;
      }[];
      error?: ErrorType;
      alias?: string;
    };
  };

  education?: {
    education?: {
      value?: Array<{
        schoolName?: FormValueType;
        degree?: FormValueType;
        description?:  {
          value?: Array<{
            id?: string;
            value?: string;
            error?: ErrorType;
          }>;
          error?: ErrorType;
          alias?: string;
        };
        startDate?: FormValueType;
        endDate?: FormValueType;
        location?: FormValueType;
        city?: { value?: string; error?: ErrorType; alias?: string };
        country?: { value?: string; error?: ErrorType; alias?: string };
      }>;
      error?: ErrorType;
      alias?: string;
    };
  };

  involvement?: {
    involvement?: {
      value?: Array<{
        organizationName?: FormValueType;
        role?: FormValueType;
        startDate?: FormValueType;
        endDate?: FormValueType;
        location?: FormValueType;
        description?:  {
          value?: Array<{
            id?: string;
            value?: string;
            error?: ErrorType;
          }>;
          error?: ErrorType;
          alias?: string;
        };
      }>;
      error?: ErrorType;
      alias?: string;
    };
  };

  awards?: {
    awards?: {
      value?: Array<{
        awardTitle?: FormValueType;
        dateAwarded?: FormValueType;
        awardLink?: FormValueType;
      }>;
      error?: ErrorType;
      alias?: string;
    };
  };

  certificate?: {
    certificate?: {
      value?: Array<{
        certificateTitle?: {
          value?: string;
          error?: ErrorType;
          alias?: string;
        };
        dateAwarded?: FormValueType;
        certificateLink?: FormValueType;
        description?:  {
          value?: Array<{
            id?: string;
            value?: string;
            error?: ErrorType;
          }>;
          error?: ErrorType;
          alias?: string;
        };
      }>;
      error?: ErrorType;
      alias?: string;
    };
  };

  references?: {
    reference?: {
      name?: FormValueType;
      title?: FormValueType;
      school?: FormValueType;
      company?: FormValueType;
      contactInformation?: {
        phoneNumber?: FormValueType;
        email?: FormValueType;
        location?: {
          country?: FormValueType;
          state?: FormValueType;
        }
      };
    };
  };

  publications?: {

  }

  languages?: {

  }

  interests?: {

  }
}

export interface meta {
  order: Array<string>
}

export type ResumeFormDataUnion = ResumeForm | ResumeFormCompType | null | {};

export type ResumeCrumbArray = {
  name: any;
  alias: any;
  value: { name: any; alias: any; error: any; value: any }[];
}[];

export const urlSchema = z.object({
  label: z.string(),
  href: z.literal("").or(z.string().url()),
});

// Type
export type URL = z.infer<typeof urlSchema>;

// Defaults
export const defaultUrl: URL = {
  label: "",
  href: "",
};
