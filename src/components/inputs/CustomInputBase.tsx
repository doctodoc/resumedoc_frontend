import { colors } from "@/assets/css/gencss";
import { ThemeTypeEnum } from "@/shared/enums/themeEnum";
import useThemeHook from "@/shared/hooks/useThemeHook";
import { InputAdornment, InputBase, styled, TextField } from "@mui/material";
import React from "react";

const CustomInputBase = ({ ...props }: any) => {
  const { theme } = useThemeHook();

  return (
    // <div className={containerClass}>
    <StyledTextField
      {...props}
      sx={
        theme === ThemeTypeEnum.light
          ? {
              "& .MuiSvgIcon-root": {
                color: "#515151",
                borderColor: colors.inputBorder,
              },
              "& .MuiInputBase-input": {
                color: "black",
                borderColor: "rgb(217 217 217 / 0.6)",
              },
            }
          : {
              "& .MuiInputBase-input": {
                color: "white",
                borderColor: "rgb(217 217 217 / 0.6)",
              },
              "& .MuiSvgIcon-root": {
                color: "#D9D9D9",
                // backgroundColor: "red",
              },
            }
      }
      fullWidth
      size="small"
    />
    // </div>
  );
};

const StyledTextField = styled(InputBase)<any>(({ theme }) => ({
  "label + &": {
    color: colors.placeholder,
  },

  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "transparent",
    border: "1px solid ",
    padding: "8px 26px 8px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

    "&:focus": {
      borderRadius: 4,
      borderWidth: "2px",
      borderColor: colors.primary,

      "& label": {
        color: colors.primary,
      },
    },
  },
}));

export default CustomInputBase;
