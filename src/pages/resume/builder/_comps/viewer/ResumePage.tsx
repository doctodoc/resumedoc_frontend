import { selectAppearance } from "@/api/slices/resume/resumeAppearanceConfig/slice";
import { useAppSelector } from "@/lib/hooks/globalHooks";
import { cn } from "@/utils";
import { pageSizeMap } from "@/utils/helperData/resume";
import React, { forwardRef } from "react";

type Props = {
  mode?: "preview" | "builder";
  pageNumber?: number;
  children: React.ReactNode;
  style?: React.CSSProperties
  className?: string
};

export const MM_TO_PX = 3.78;

const Page = forwardRef<HTMLDivElement, Props>(({ mode = "preview", pageNumber, children, style, className }, thisref) => {
  const fontFamily = useAppSelector(selectAppearance).typography.font.family;
  const page = useAppSelector(selectAppearance).page;

  return (
    <div
      data-page={pageNumber}
      className={cn(
        ` text-foreground ${className}`,
        mode === "builder" && "shadow-2xl"
      )}
      ref={thisref}
      style={{
        fontFamily,
        width: `${pageSizeMap[page.format].width * MM_TO_PX}px`,
        minHeight: `${pageSizeMap[page.format].height * MM_TO_PX}px`,
        backgroundColor: "white",
        ...style
      }}
    >
      {/* {mode === "builder" && page.options.pageNumbers && (
        <div className={cn("absolute -top-7 left-0 font-bold dark:text-white")}>
          Page {pageNumber}
        </div>
      )} */}

      {children}

      {mode === "builder" && (
        <div
          className="absolute inset-x-0 border-b border-dashed border-2"
          style={{
            top: `${pageSizeMap[page.format].height * MM_TO_PX}px`,
          }}
        />
      )}
    </div>
  );
})

export default Page;
