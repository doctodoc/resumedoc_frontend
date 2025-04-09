import { Field, FieldHookConfig, useField } from "formik";
import InputField from "../inputs/InputField";
import { InputFieldPropsType } from "@/shared/types/componentTypes";
import CustomTextField from "../inputs/CustomTextField";
import { memo, ReactNode } from "react";
import { SetFieldValue } from "@/shared/types/formTypes";
import { secTextColor } from "@/assets/css/tailwindcss";

// Modify<{
//     // label: string
//     id: string
//     inputProps: any
//     name: string
//     placeholder: string
// }, InputFieldPropsType>

type InputProps = {
  placeholder?: string;
  // label?: string;
  className?: string;
  inputComp?: any;
  inputProps?: any;
  adornment?: ReactNode;
  adornmentPosition?: string;
  setFieldValue?: SetFieldValue;
  label?: ReactNode;
  optional?: boolean;
  name?: string;
  formDescription?: string;
};

const FmkInput = ({
  placeholder,
  className,
  adornment,
  setFieldValue,
  adornmentPosition,
  inputComp: InputComp, // input component if available
  inputProps, // input properties of component if available
  label,
  optional,
  formDescription,
  ...props
}: FieldHookConfig<string> & InputProps) => {
  const onChange = (val: any) => {
    console.log(`select says: ${inputProps.name} ${val}`);
    if (setFieldValue) setFieldValue(inputProps.name, val);
  };
  return (
    <div className="w-full ">
      <div className="flex gap-2">
        <div className={`capitalize ${secTextColor} `}>
          {/* {typeof label === 'string' ?  <p>{label}</p> : <div>{label}</div>} */}
          {label}
        </div>
        {optional && <p className="text-primary/70">optional</p>}
      </div>
      <h2>{formDescription}</h2>

      <Field {...props}>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
          helpers,
        }: any) => {
          return (
            <div className="w-full">
              {InputComp ? (
                <InputComp {...field} {...inputProps} onChange={onChange} />
              ) : (
                <CustomTextField
                  type={props.type}
                  // label={label}
                  containerClass={className}
                  placeholder={placeholder}
                  adornment={adornment}
                  adornmentPosition={adornmentPosition}
                  {...field}
                />
              )}

              {meta.touched && meta.error && (
                <div className="error">{meta.error}</div>
              )}
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default memo(FmkInput);
