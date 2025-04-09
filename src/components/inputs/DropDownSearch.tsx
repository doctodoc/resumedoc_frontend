import React, { memo, useEffect } from "react";
import { Autocomplete } from "@mui/material";
import StyledTextField from "./StyledTextField";
import { ThemeTypeEnum } from "@/shared/enums/themeEnum";
import useThemeHook from "@/shared/hooks/useThemeHook";

type PropTypes = {
  placeholder?: string;
  id: string;
  value: string;
  onChange: (val: string) => void;
  className?: string;
  containerClass?: string;
  options?: Array<{ display: string; id: string }>;
  name: string;
  clearOnEscape?: boolean;
  fullWidth?: boolean;
  freeSolo?: boolean;
};

const DropDownSearch = ({
  placeholder,
  id,
  value,
  className,
  onChange,
  options,
  name,
  clearOnEscape,
  fullWidth,
  freeSolo,
  ...props
}: PropTypes) => {
  const [inputValue, setInputValue] = React.useState("");
  const [selectValue, setSelectValue] = React.useState("");
  const { theme: themeMode } = useThemeHook();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // console.log("first");
    if (value) {
      onChange(value);
    }
  };

  // const handleSelectChange =(event: any, newValue: string | null) => {
  //   if (value) {
  //     onChange(value);
  //   }  }

  useEffect(() => {
    if (typeof value !== "string") return;
    setInputValue(value);
  }, [value]);

  return (
    <div className="w-full">
      <Autocomplete
        options={options?.map((option) => option.display) ?? []}
        freeSolo={freeSolo}
        noOptionsText="No suggestions"
        // getOptionLabel={(option: any) => option.display}
        onInputChange={(e, newValue) => {
          onChange(newValue);
        }}
        onChange={(e, newValue) => {
          if (newValue) {
            console.log("select");
            setSelectValue(newValue);
          }
        }}
        inputValue={inputValue}
        value={selectValue}
        clearOnEscape={clearOnEscape ? clearOnEscape : false}
        renderInput={(params) => (
          <StyledTextField
            // {...props}
            {...params}
            placeholder={placeholder}
            name={name}
            id={id}
            // onChange={handleChange}
            className={className}
            fullWidth={fullWidth}
            size="small"

            // containerClass
          />
        )}
      />

      <section></section>
    </div>
  );
};

export default memo(DropDownSearch);
