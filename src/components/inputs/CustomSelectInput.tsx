import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { InputBase, styled } from "@mui/material";
import { colors } from "@/assets/css/gencss";
import useThemeHook from "@/shared/hooks/useThemeHook";
import { ThemeTypeEnum } from "@/shared/enums/themeEnum";
import CustomInputBase from "./CustomInputBase";

type Props = {
  onChange: (val: any) => void;
  value: string;
  defaultValue?: string;
  dropDownItems: Array<any>;
  label?: string;
  placeholder?: string;
  name: string;
  id: string;
  editable?: boolean
  className?: string
};

export default function CustomSelectInput({
  onChange,
  value,
  dropDownItems,
  label,
  placeholder,
  name,
  id,
  editable,
  className,
  defaultValue,
  ...props
}: Props) {
  const { theme } = useThemeHook();

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
    onChange(event.target.value as string);
  };


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {/* <InputLabel>{label}</InputLabel> */}
        <Select
          {...props}
          value={value}
          id={id}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          label=  {label}
          // onInput={e => console.log('Text inside div', e.currentTarget.textContent)}
          className={className}
          onChange={handleChange}
          input={<CustomInputBase />}
          contentEditable={editable}
          inputProps={{
            label,
            placeholder,
            value,
            name,
            defaultValue
          }}
          MenuProps={
            theme === ThemeTypeEnum.light
              ? {
                  PaperProps: {
                    sx: {
                      bgcolor: "#F5F5F5",
                      "& .MuiMenuItem-root": {
                        padding: 1,
                      },
                    },
                  },
                }
              : {
                  PaperProps: {
                    sx: {
                      bgcolor: "#2C2C2C",
                      "& .MuiMenuItem-root": {
                        padding: 1,
                      },
                      color: "white",
                      fontWeight: "400",
                    },
                  },
                }
          }
          sx={
            theme === ThemeTypeEnum.light
              ? {
                  "& .MuiOutlinedInput-root": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: colors.inputBorder,
                    },
                  },
                }
              : {
                  "& .MuiOutlinedInput-root": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgb(217 217 217 / 0.6)",
                    },
                    "& fieldset": {
                      borderColor: "white",
                    },

                    color: "white",
                  },
                  paddingLeft: "0",
                  color: "white",
                }
          }
        >
          {dropDownItems &&
            dropDownItems.map((item: {id: string, display: String}) => (
              <MenuItem value={item.id} key={item.id}>{item.display}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
