import CurvedButton from "@/components/buttons/CurvedButton";
import { Add } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import React from "react";
import ResumeClip from "../selectResume/ResumeClip";

type Props = {
  resumeList: any;
};

const CreatedResumes = ({ resumeList }: Props) => {
  const router = useRouter();

  const navToBuildResume = () => {
    router.push("/build-resume", { scroll: false });
  };

  return (
    <div className="flex flex-col gap-4 w-full bg-inherit">
      <main className="flex flex-col gap-4 w-full bg-inherit">
        <h1 className="font-medium">Created Resumes & Saved Entries</h1>
        <div className="flex h-fit bg-inherit">
          <section className="flex gap-3 overflow-x-auto max-w-max">
            <ResumeClip className="min-w-44 max-w-44" />
            <ResumeClip className="min-w-44 max-w-44" />
            <ResumeClip className="min-w-44 max-w-44" />
            <ResumeClip className="min-w-44 max-w-44" />
          </section>

          <section
            className={
              "flex-shrink flex relative ml-20 bg-red-500 z-[2] bg-inherit"
            }
          >
            {/* glass pane */}
            <div
              className={`w-[80%] h-full flex-1 backdrop-blur-md bg-gradient-to-r from-transparent to-inherit absolute -left-[calc(80%)] top-0`}
            ></div>

            <button
              className="flex flex-col gap-3 justify-center w-fit aspect-[1/2] ml-0 p-3 flex-1 items-center bg-light_gray_widget text-primary"
              onClick={navToBuildResume}
            >
              <p className="font-medium text-[18px]">New Resume</p>
              <Add className="w-full" sx={{ fontSize: 50 }} />
            </button>
          </section>
        </div>
      </main>

      <section className="w-full flex justify-center items-center">
        <CurvedButton className="bg-primary text-white" py={3}>
          View All
        </CurvedButton>
      </section>
    </div>
  );
};

export default CreatedResumes;
