import { ReactElement } from "react";

export interface IconFeaturesDataType {
    title: string;
    description: string;
    icon: ()=> ReactElement
}

export interface ImageFeaturesDataType {
    title: string;
    description: string;
    image: string;
    buttonText: string;
}