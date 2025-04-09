import CurvedButton from "@/components/buttons/CurvedButton";
import { universalPaddingX, universalPaddingY } from "@/assets/css/tailwindcss";
import React from "react";
import { useRouter } from "next/navigation";
import useCustomRouter from "@/shared/hooks/useCustomRouter";
import { AppRoutes } from "@/routes/AppRoutes";
// import DropDownSearch from "@/components/inputs/DropDownSearch";
import InputField from "@/components/inputs/InputField";

const Banner = () => {
  const { navigate } = useCustomRouter();
  return (
    <div className={`flex flex-col gap-4 ${universalPaddingX} pt-20`}>
      <main className="flex flex-col gap-10 items-center">
        <section className="flex flex-col gap-6 w-full text-center max-w-[700px]">
          <h1 className="dark:text-dark_primary_text text-4xl sm:text-5xl xl:text-7xl font-semibold ">
            The Fastest AI Resume Builder
          </h1>

          <p className="dark:text-dark_primary_text text-secondary_text text-xl xl:text-2xl dark:font-medium font-semibold">
            Build your resume in seconds and impress every recruiter and ATS
            bot.
            {/* Your resume should not stop you from landing your dream job */}
          </p>
        </section>
        <section></section>
      </main>
      <section className="w-full flex flex-col sm:flex-row items-center sm:items-start sm:justify-center gap-4 md:gap-6 xl:gap-10 xl:text-lg ">
        {/* <CurvedButton className="text-white bg-black dark:text-black dark:bg-white w-full sm:w-fit font-semibold hover:shadow-lg">
          Hire A Resume Expert
        </CurvedButton> */}
        <div className="w-full flex justify-center items-center gap-4 h-10">
          <div className="flex-1 max-w-[600px] ">
            {/* <p>Type in role you are applying for...</p> */}
            <InputField
              placeholder={"Enter the role you are applying for."}
              id={"resume_role"}
              value={""}
              handleChange={() => {}}
              className="min-w-[200px] max-w-full h-10 border-primary dark:border-primary border-2"
              isOutlined
            />
          </div>

          <CurvedButton
            className="text-white bg-primary w-full sm:w-fit font-medium text-18 hover:shadow-lg h-full"
            onClick={() => navigate(AppRoutes.resume.buildResume)}
            py={"0"}
          >
            Build My Resume Now
          </CurvedButton>
        </div>
      </section>
    </div>
  );
};

export default Banner;
