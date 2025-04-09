import { PickersLayoutClasses } from "@mui/x-date-pickers/PickersLayout/pickersLayoutClasses";
import { colors } from "./gencss";

export const dateInputCssStyle = ({
  pickersLayoutClasses,
  mode,
}: {
  pickersLayoutClasses: Record<keyof PickersLayoutClasses, string>;
  mode: string;
}) => {
  switch (mode) {
    case "light":
    default:
      return {
        [`.${pickersLayoutClasses.toolbar}`]: {
          color: "white",
          backgroundColor: colors.primary,
          "& .MuiTypography-root ": {
            color: "white",
          },
        },
        [`.${pickersLayoutClasses.actionBar}`]: {
          "& .MuiButton-text ": {
            color: colors.primary,
          },
        },
        [`.${pickersLayoutClasses.contentWrapper}`]: {
          "& .Mui-selected": {
            backgroundColor: colors.primary,
            color: "white",
          },

          "& .Mui-selected:hover": {
            backgroundColor: colors.primary,
            color: "white",
          },
          "& .Mui-selected:focus": {
            backgroundColor: colors.primary,
            color: "white",
          },
        },

        //Date Picker Text Area
        "& label": {
          color: colors.placeholder,
          marginTop: "-0.5rem",
        },
        
        "& label.Mui-focused": {
          color: colors.primary,
          marginTop:0

        },
      };

    case "dark":
      return {
        // Date Picker General Style Scheme
        [`.${pickersLayoutClasses.toolbar}`]: {
          color: "white",
          backgroundColor: colors.primary,
          "& .MuiTypography-root ": {
            color: "white",
          },
        },
        [`.${pickersLayoutClasses.actionBar}`]: {
          "& .MuiButton-text ": {
            color: colors.primary,
          },
        },
        [`.${pickersLayoutClasses.contentWrapper}`]: {
          color: "white",
          backgroundColor: colors.secondaryDark,
          "& .MuiTypography-root ": {
            color: "white",
          },
          "& .Mui-selected": {
            backgroundColor: colors.primary,
            color: "white",
          },
          "& .Mui-selected:hover": {
            backgroundColor: colors.primary,
            color: colors.primary,
          },
          "& .Mui-selected:focus": {
            backgroundColor: colors.primary,
            color: "white",
          },
        },
        [`.${pickersLayoutClasses.root}`]: {
          color: "white",
          "& .MuiTypography-root ": {
            color: "white",
          },
        },

        //Date Picker Text Area
        "& label": {
          color: colors.placeholderDark,
          opacity: 0.7,
          marginTop: "-0.5rem",
        },
        "& label.Mui-focused": {
          color: colors.primary,
          opacity: 1,
          marginTop:0
        },
      };
  }
};
