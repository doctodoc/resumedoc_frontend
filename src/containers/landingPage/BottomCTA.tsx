import CurvedButton from "@/components/buttons/CurvedButton";
import React from "react";

const BottomCTA = () => {
  return (
    <div className={`flex flex-col gap-6 md:gap-12 `}>
      <section className="w-full flex flex-col items-center gap-4 md:gap-6 bg-power_purple_light dark:bg-black/80 px-4 py-4 md:py-6">
        <h2 className="text-xl md:text-2xl font-semibold text-center dark:text-dark_primary_text">
          Let Your Resume Speak For You
        </h2>
        <CurvedButton className="bg-power_purple dark:bg-blue-400 text-white bg">
          Build Your Resume Now
        </CurvedButton>
      </section>

      <section className="w-full flex flex-col items-center gap-4 md:gap-6">
        <h2 className="text-xl md:text-2xl font-semibold text-center dark:text-dark_primary_text">
          Our Resume Experts Can Analyze your Resume or Build A New Resume
        </h2>
        <CurvedButton className="bg-black text-white dark:text-black dark:bg-white font-semibold">
          Hire An Expert Now
        </CurvedButton>
      </section>
    </div>
  );
};

export default BottomCTA;
