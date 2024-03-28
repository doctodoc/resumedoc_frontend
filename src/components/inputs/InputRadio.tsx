import { pryTextColor } from "@/assets/css/tailwindcss";
import React, { ReactElement } from "react";

type Props = {
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
  label: ReactElement | string;
  name?: string;
  id?: string;
  defaultChecked?: boolean
  htmlFor?: string
};

const InputRadio = ({ onChange, value, label, name, id, defaultChecked, htmlFor}: Props) => {
  return (
    <div className="flex gap-2">
      <input
        type="radio"
        value={value}
        name={name}
        id={id}
        onChange={onChange}
        className="border-primary accent-primary"
        defaultChecked={defaultChecked}
      />
      <label className={`${pryTextColor} capitalize`} htmlFor={htmlFor}>{label}</label>
    </div>
  );
};

export default InputRadio;
