import { selectResumeFontSizes } from "@/api/slices/resume/resumeAppearanceConfig/slice";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import { useAppSelector } from "@/lib/hooks/globalHooks";
import React from "react";

const FontSize = () => {
  const resumeFontSizes = useAppSelector(selectResumeFontSizes);

  return (
    <div>
      <div className="flex gap-2">
        {resumeFontSizes.map((fontSize) => (
          <OutlinedButton
            px={4}
            py={1}
            className="text-grey_icon  dark:text-dark_primary_text border-light_border_color dark:border-light_gray_widget/15 rounded-md hover:bg-light_border_color dark:hover:bg-light_border_color/20"
            outlineColor=""
            style={{ borderWidth: "1.8px" }}
          >
            <p className="capitalize">{fontSize}</p>
          </OutlinedButton>
        ))}
      </div>
    </div>
  );
};

export default FontSize;
