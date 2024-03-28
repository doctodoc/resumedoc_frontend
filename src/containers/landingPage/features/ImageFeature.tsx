"use client";

import CurvedButton from "@/components/buttons/CurvedButton";
import React from "react";

type Props = {
  title: string;
  description: string;
  buttonText: string;
  handleFeature: () => void;
  buttonClassName?: string;
};

// Feature description with images
const ImageFeature = ({
  title,
  description,
  buttonText,
  handleFeature,
  buttonClassName,
}: Props) => {
  return (
    <div className="flex">
      {/* image */}
      <div className="flex-1"></div>
      <section className="flex flex-col gap-3 xl:gap-4 md:w-[50%]">
        <h3 className="text-xl md:text-2xl font-medium dark:text-dark_primary_text">
          {title}
        </h3>
        <p className="md:text-lg dark:text-dark_secondary_text">
          {description}
        </p>
        <CurvedButton
          onClick={handleFeature}
          className={`w-fit ${buttonClassName} font-semibold`}
        >
          {buttonText}
        </CurvedButton>
      </section>
    </div>
  );
};

export default ImageFeature;
