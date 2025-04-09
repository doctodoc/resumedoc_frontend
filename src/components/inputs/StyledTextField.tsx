import { colors } from "@/assets/css/gencss";
import useThemeHook from "@/shared/hooks/useThemeHook";
import { styled, TextField } from "@mui/material";
import React from "react";

const StyledTextField = styled(TextField)<any>(({ theme }) => {
  const { theme: themeMode } = useThemeHook();
  return {
    "& .MuiOutlinedInput-root":
      themeMode === "dark"
        ? {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgb(217 217 217 / 0.6)",
            },
            "& fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.primary,
            },
            "&:hover > fieldset": { borderColor: colors.primary },

            color: "white",
            "& .MuiSvgIcon-root": {
                color: "#D9D9D9",
                // backgroundColor: "red",
              },
          }
        : {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: colors.inputBorder,
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.primary,
            },
            "&:hover > fieldset": { borderColor: colors.primary },
            "& .MuiSvgIcon-root": {
                color: "#515151",
                borderColor: colors.inputBorder,
              },
          },

    //Date Picker Text Area
    "& label": {
      color: colors.placeholder,
    },
    "& label.Mui-focused": {
      color: colors.primary,
    },
  };
});

export default StyledTextField;
