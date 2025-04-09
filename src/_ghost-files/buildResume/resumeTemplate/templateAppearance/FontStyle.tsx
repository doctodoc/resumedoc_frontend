import { selectResumeFontStyles } from "@/api/slices/resume/resumeAppearanceConfig/slice";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import { useAppSelector } from "@/lib/hooks/globalHooks";
import React from "react";

const FontStyle = () => {
  const resumeFontStyles = useAppSelector(selectResumeFontStyles);

  return (
    <div>
      <div className="flex gap-2">
        {resumeFontStyles.map((fontStyle) => (
          <OutlinedButton
            px={4}
            py={1}
            className="text-grey_icon capitalize dark:text-dark_primary_text border-light_border_color dark:border-light_gray_widget/15 rounded-md hover:bg-light_border_color dark:hover:bg-light_border_color/20"
            outlineColor=""
            style={{ borderWidth: "1.8px" }}
          >
            <p>{fontStyle}</p>
          </OutlinedButton>
        ))}
      </div>
    </div>
  );
};

export default FontStyle;
