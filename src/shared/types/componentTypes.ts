import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { MouseEventHandler, ReactElement } from "react";

export interface InputFieldPropsType extends React.InputHTMLAttributes<HTMLInputElement>{
    name?: string;
    placeholder?: string;
    title?: string;
    className?: string;
    containerClass?: string;
    type?: string;
    id: string;
    value: string | number;
    fieldName?: string;
    // error?: FormErrorType[] | null | string;
    handleChange?: (e?: any) => void;
    isIdle?: boolean;
    infoModalContent?: string;
    titleClassName?: string;
    min?: number;
    max?: number;
    icon?: any;
    iconPosition?: "left" | "right",
    isOutlined?: boolean;
    autoFocus?: boolean
    ref?: any
    // Array<FormErrorType> | null
  }

  export interface ContainerStylingPropsType{
    px?: string | number;
    py?:string | number;
    fontSize?: string | number;
    fontColor?: string;
    bgColor?: string
  }

  export interface FooterLinksDataType{
    category: string;
    links: Array<{name: string, link: string}>
  }

  