import CurvedButton from "@/components/buttons/CurvedButton";
import { universalPaddingX, universalPaddingY } from "@/assets/css/tailwindcss";
import React from "react";
import { useRouter } from "next/navigation";
import useCustomRouter from "@/shared/hooks/useCustomRouter";
import { AppRoutes } from "@/routes/AppRoutes";


const Banner = () => {
  const {navigate} = useCustomRouter()  
  return (
    <div className={`flex flex-col gap-4 ${universalPaddingY} ${universalPaddingX}`}>
      <main>
        <section className="flex flex-col gap-6 md:w-[50%]">
          <h1 className="dark:text-dark_primary_text text-4xl sm:text-5xl xl:text-7xl font-semibold">
            Build Your Professional Resume Easily.
          </h1>
          <p className="dark:text-dark_secondary_text text-lg xl:text-2xl dark:font-normal font-medium">
            Your resume should not stop you from landing your dream job
          </p>
        </section>
        <section></section>
      </main>
      <section className="w-full flex flex-col sm:flex-row items-center sm:items-start sm:justify-center gap-4 md:gap-6 xl:gap-10 xl:text-base font-semibold">
        <CurvedButton className="text-white bg-black dark:text-black dark:bg-white w-full sm:w-fit">
          Hire A Resume Expert
        </CurvedButton>
        <CurvedButton className="text-white bg-primary w-full sm:w-fit" onClick={()=>navigate(AppRoutes.resume.buildResume)}>
          Build My Resume Now
        </CurvedButton>
      </section>
    </div>
  );
};

export default Banner;
