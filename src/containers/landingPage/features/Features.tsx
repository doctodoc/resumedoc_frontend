"use client";

import React from "react";
import IconFeature from "./IconFeature";
import EdgeButton from "@/components/buttons/EdgeButton";
import ImageFeature from "./ImageFeature";
import {
  iconFeaturesData,
  imageFeaturesData,
} from "@/data/landingPageData/featureData";
import {
  gradientGreenToBlue,
  universalPaddingX,
} from "@/assets/css/tailwindcss";

const Features = () => {
  return (
    <div className={`flex flex-col gap-4 ${universalPaddingX}`}>
      <h3 className="text-lg xl:text-xl font-medium dark:text-dark_primary_text">
        {"Why you should use Resumedoc"}
      </h3>
      {/* features */}
      <main className="flex flex-col gap-10 md:gap-20">
        <section className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-2 px-4">
            {iconFeaturesData.map(({ title, description, icon }) => (
              <IconFeature
                title={title}
                description={description}
                icon={icon}
                key={title}
              />
            ))}
          </div>
          <div className="w-full flex justify-center mt-4 md:mt-6">
            <EdgeButton
              className={`border-none text-white w-fit px-2 ${gradientGreenToBlue}`}
            >
              Get started Now
            </EdgeButton>
          </div>
        </section>

        <section className="flex flex-col gap-6 md:gap-10 xl:gap-16">
          {imageFeaturesData.map(
            ({ title, description, image, buttonText }, index) => (
              <ImageFeature
                key={title}
                title={title}
                description={description}
                buttonText={buttonText}
                handleFeature={() => {}}
                buttonClassName={`text-white ${
                  index % 2 === 0 ? "bg-primary" : "bg-black"
                }`}
              />
            )
          )}
        </section>
      </main>
    </div>
  );
};

export default Features;
