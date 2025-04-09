import React, { useCallback, useEffect, useState } from "react";
// import InputWithTag from "./InputWithTag";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import {
  usePickerLayout,
  PickersLayoutRoot,
  pickersLayoutClasses,
  PickersLayoutContentWrapper,
} from "@mui/x-date-pickers/PickersLayout";
import useThemeHook from "@/shared/hooks/useThemeHook";
import { dateInputCssStyle } from "@/assets/css/muicss";
import { DateView } from "@mui/x-date-pickers/models";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { styled, TextField } from "@mui/material";
import { colors } from "@/assets/css/gencss";
import { ThemeTypeEnum } from "@/shared/enums/themeEnum";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { format } from "date-fns";
interface DateInputPropsType {
  placeholder?: React.ReactNode;
  id: string;
  name: string;
  views?: readonly DateView[];
  onChange?: (T?: any) => void;
  value?: string;
}

const DateInput = ({
  id,
  placeholder,
  views,
  name,
  onChange,
  value,
  ...props
}: DateInputPropsType) => {
  const handleChange = (newVal: any) => {
    const date = format(newVal, "MMM yyyy");
    console.log(date);
    if (onChange) onChange(date ? date : "");
  };

  const { theme } = useThemeHook();

  useEffect(() => {
    if (value) console.log(format(value, "yyyy-MM-dd"));
  }, [value]);

  return (
    <div className="w-full max-w-[300px]">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StyledDatePicker
          {...props}
          sx={dateInputCssStyle({ mode: theme, pickersLayoutClasses })}
          name={name}
          // label={placeholder}
          slots={{
            layout: CustomLayout,
          }}
          slotProps={{
            textField: {
              placeholder,
              sx:
                theme === ThemeTypeEnum.light
                  ? {
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: colors.inputBorder,
                          fontSize: "16px",
                        },
                      },
                    }
                  : {
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "rgb(217 217 217 / 0.6)",
                        },

                        color: "white",
                      },
                      svg: { color: colors.inputBorder },
                    },
            },
            // label: {
            //   sx: {
            //     color: "red",
            //   },
            // },
            // day: {
            //   sx: { color: "white" },
            // },
          }}
          views={views ? views : ["month", "year"]}
          size="small"
          // label={placeholder}
          onChange={handleChange}
          inputFormat="yyyy-MM-dd"
          value={value ? new Date(format(value, "yyyy-MM-dd")) : null}
        />{" "}
      </LocalizationProvider>
      {/* <InputWithTag id={id} type="date" {...props} /> */}
    </div>
  );
};

const CustomLayout = React.memo((props: any) => {
  const { toolbar, tabs, content, actionBar } = usePickerLayout(props);

  const { theme } = useThemeHook();
  const setColorTheme = useCallback(() => {
    return dateInputCssStyle({ pickersLayoutClasses, mode: theme });
  }, [theme]);
  return (
    <PickersLayoutRoot sx={setColorTheme()} ownerState={props}>
      {/* {toolbar} */}
      {/* {actionBar} */}
      <PickersLayoutContentWrapper
        className={pickersLayoutClasses.contentWrapper}
        sx={
          theme === "light" ? {} : { color: "white", svg: { color: "white" } }
        }
      >
        {tabs}
        {content}
      </PickersLayoutContentWrapper>
    </PickersLayoutRoot>
  );
});

const StyledDatePicker = styled(DatePicker)<any>(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: colors.primary,
    },
    "&:hover > fieldset": { borderColor: colors.primary },
  },
  // focused color for input with variant='standard'
  "& .MuiInput-underline:after": {
    borderBottomColor: colors.primary,
  },
  // focused color for input with variant='filled'
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: colors.primary,
  },

  "& .MuiInputBase-root": {
    paddingLeft: 15,
    paddingRight: 15,
    "& .MuiButtonBase-root": {
      padding: 0,
      paddingLeft: 10,
    },
    "& .MuiInputBase-input": {
      padding: 8.5,
      paddingLeft: 0,
    },
  },

  "& label": {
    marginTop: -40,
    color: colors.placeholder,
  },
  "& label.Mui-focused": {
    color: colors.primary,
  },
}));

export default DateInput;
