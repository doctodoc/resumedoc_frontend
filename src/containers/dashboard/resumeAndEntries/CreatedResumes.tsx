import CurvedButton from "@/components/buttons/CurvedButton";
import { Add } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import React from "react";
import ResumeClip from "../../resume/selectResume/ResumeClip";

type Props = {
  resumeList: any;
};

const CreatedResumes = ({ resumeList }: Props) => {
  const router = useRouter();

  const navToBuildResume = () => {
    router.push("/build-resume", { scroll: false });
  };

  return (
    <div className="flex flex-col gap-4 w-fit max-w-full bg-inherit ">
      <main className="flex flex-col gap-4 w-full bg-inherit">
        <h1 className="font-medium">Created Resumes & Saved Entries</h1>

        <div className="flex h-fit bg-inherit ">
          <section className="relative flex gap-3 overflow-x-auto w-fit h-fit">
            <ResumeClip className="min-w-44 max-w-44" />
            <ResumeClip className="min-w-44 max-w-44" />
            <ResumeClip className="min-w-44 max-w-44" />
            <ResumeClip className="min-w-44 max-w-44" />
            <ResumeClip className="min-w-44 max-w-44" />
            <ResumeClip className="min-w-44 max-w-44" />
            <ResumeClip className="min-w-44 max-w-44" />
            <ResumeClip className="min-w-44 max-w-44" />
            <ResumeClip className="min-w-44 max-w-44" />
            <ResumeClip className="min-w-44 max-w-44" />
            <ResumeClip className="min-w-44 max-w-44" />
            <ResumeClip className="min-w-44 max-w-44" />
            <ResumeClip className="min-w-44 max-w-44" />
            <ResumeClip className="min-w-44 max-w-44" />
            <ResumeClip className="min-w-44 max-w-44" />
            <ResumeClip className="min-w-44 max-w-44" />
            {/* glass pane
            <div
              className={`w-20 h-full bg-gradient-to-r from-transparent to-slate-900 absolute right-0 top-0 z-[3]`}
            >
            </div> */}
          </section>

          <section
            className={"flex-shrink flex relative ml-10 z-[2] bg-inherit"}
          >
            <CurvedButton
              className="flex flex-col gap-3 justify-center w-fit aspect-[1/2] ml-0 p-3 flex-1 items-center bg-light_gray_widget dark:bg-secondary_dark text-primary"
              onClick={navToBuildResume}
            >
              <p className="font-medium text-[18px]">New Resume</p>
              <Add className="w-full" sx={{ fontSize: 40 }} />
            </CurvedButton>
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
