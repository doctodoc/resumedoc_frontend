import React, {
  MutableRefObject,
  ReactNode,
  Ref,
  useEffect,
  useRef,
} from "react";
import ContactSection from "./ContactSection";
// import OutlinedButton from "@/components/buttons/OutlinedButton";
import CurvedButton from "@/components/buttons/CurvedButton";
import Button from "@/components/buttons/Button";
import { pryTextColor } from "@/assets/css/tailwindcss";
import ExperienceSection from "./experienceSection/ExperienceSection";
import { Form, Formik, FormikErrors, FormikProps } from "formik";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/globalHooks";
import { ResumeFormCompType } from "@/shared/types/componentTypes";
import {
  selectResumeForm,
  setNewResumeForm,
} from "@/api/slices/resume/resumeFormData/slice";

type Props = {
  // tabIndex: number;
  comp: any;
  values: ResumeFormCompType;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<ResumeFormCompType>>;
};

const FormArea = ({ comp: Comp, values, setFieldValue }: Props) => {
  const resumeData: ResumeFormCompType = useAppSelector(selectResumeForm);
  const dispatch = useAppDispatch();
  const formRef: any = useRef();

  // const updateFormState = (formData: ResumeFormCompType, setFieldValue) => {
  //   dispatch(setNewResumeForm(formData));
  // };

  // useEffect(() => {
  //   console.log(values);
  // }, [values]);

  return (
    <div className={`px-3 ${pryTextColor}`}>
      <main className="flex flex-col gap-4">
        <Form
          className="flex flex-col gap-6 xl:gap-10"
          autoComplete="off"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {Comp && <Comp formValues={values} setFieldValue={setFieldValue} />}
        </Form>
      </main>
    </div>
  );
};

export default FormArea;
