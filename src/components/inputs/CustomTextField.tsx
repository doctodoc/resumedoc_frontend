import { colors } from "@/assets/css/gencss";
import { ThemeTypeEnum } from "@/shared/enums/themeEnum";
import useThemeHook from "@/shared/hooks/useThemeHook";
import { InputAdornment, styled, TextField } from "@mui/material";
import React from "react";

const CustomTextField = ({
  containerClass,
  adornment,
  adornmentPosition,
  ...props
}: any) => {
  const { theme } = useThemeHook();

  return (
    <div className={containerClass}>
      <StyledTextField
        {...props}
        InputProps={{
          
          startAdornment: <InputAdornment position="start">{adornment}</InputAdornment>
      }}
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
        fullWidth
        size="small"
        
      />
    </div>
  );
};

const StyledTextField = styled(TextField)<any>(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: colors.primary,
    },
    "&:hover > fieldset": { borderColor: colors.primary },
  },

  //Date Picker Text Area
  "& label": {
    color: colors.placeholder,
  },
  "& label.Mui-focused": {
    color: colors.primary,
  },
}));

export default CustomTextField;
