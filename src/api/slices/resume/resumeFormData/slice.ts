import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddResumeSectionPayload } from "./types";
import { RootStateType } from "@/api/redux/store";
import {
  ActionTypeEnum,
  ResumeYearsOfExperience,
} from "@/shared/enums/resumeEnums";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import { initialResumeFormData } from "@/data/resume/resumeFormData";

const initialresumeFormState: ResumeFormCompType = initialResumeFormData;

export const resumeFormSlice = createSlice({
  name: "resumeForm",
  initialState: initialresumeFormState,
  reducers: {
    addResumeSection: (
      state: ResumeFormCompType,
      action: PayloadAction<AddResumeSectionPayload>
    ) => {
      const { formKey, value } = action.payload;
      state = { ...state, [`${formKey}`]: value };
    },

    setNewResumeForm: (
      state: ResumeFormCompType,
      action: PayloadAction<ResumeFormCompType>
    ) => {
      const formData = action.payload;
      state = { ...formData };
    },

    // setSectionField: (
    //   state: ResumeFormCompType,
    //   action: PayloadAction<{
    //     formSectionKey: keyof ResumeFormCompType;
    //     formFieldKey: keyof ResumeFormCompType[keyof ResumeFormCompType];
    //     data: { value: any; error?: ErrorType };
    //   }>
    // ) => {
    //   const { formSectionKey, formFieldKey, data } = action.payload;
    //   if (formSectionKey && formFieldKey && state[formSectionKey]) {
    //     state = {
    //       ...state,
    //       [`${formSectionKey}`]: {
    //         ...state[formSectionKey],
    //         [String(formFieldKey)]: {
    //           ...((state[formSectionKey] as object)[formFieldKey] as object),
    //           ...data,
    //         },
    //       },
    //     };
    //   }
    // },

    // setSectionFieldWithList: (
    //   state: ResumeFormCompType,
    //   action: PayloadAction<{
    //     actionType:
    //       | ActionTypeEnum.add
    //       | ActionTypeEnum.delete
    //       | ActionTypeEnum.edit;
    //     formSectionKey: keyof ResumeFormCompType;
    //     formFieldKey: keyof ResumeFormCompType[keyof ResumeFormCompType];
    //     data: { value: any; error?: ErrorType };
    //   }>
    // ) => {
    //   const { actionType, formSectionKey, formFieldKey, data } = action.payload;

    //   switch (actionType) {
    //     case ActionTypeEnum.add:
    //       break;
    //     case ActionTypeEnum.delete:
    //       break;
    //     case ActionTypeEnum.edit:
    //       break;

    //     default:
    //       break;
    //   }
    // },
  },
});

export const { setNewResumeForm } = resumeFormSlice.actions;

export const selectResumeForm = (state: RootStateType) => state.resumeForm;

export default resumeFormSlice.reducer;
