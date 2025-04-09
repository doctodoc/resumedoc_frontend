import { ReactNode } from "react";

export type Modify<T, R> = Omit<T, keyof R> & R;

export type ChildrenType = ReactNode | Array<ReactNode> | string

export interface BigObject<T> {
    [index: string]: T
}
