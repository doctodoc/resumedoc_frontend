import {
  pryBgColor,
  pryTextColor,
  secTextColor,
} from "@/assets/css/tailwindcss";
import CurvedButton from "@/components/buttons/CurvedButton";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import CustomTextField from "@/components/inputs/CustomTextField";
import TextAreaCustom from "@/components/inputs/TextAreaCustom";
import { Modal } from "@/components/modal";
import { AppRoutes } from "@/routes/AppRoutes";
import { Close, ToggleOff, ToggleOn } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {
  closeModal: () => void;
};

const NewResumeModal = ({ closeModal }: Props) => {
  const [tailorResume, setTailorResume] = useState(false);
  const router = useRouter();

  const toggleTailorResume = () => {
    setTailorResume((prev) => !prev);
  };

  const saveAndStartResumeFlow = () => {
    router.push(`${AppRoutes.dashboard.resume}/new_res_sth`);
  };
  return (
    <Modal isOpen={true} close={closeModal} dialogClassName="h-full">
      <div
        className={`flex flex-col p-2 md:p-3 w-[500px] ${pryTextColor} dark:font-light max-h-[calc(100vh_-_20px)]`}
      >
        <header
          className={`flex flex-1 justify-between mb-4 p-2 sticky top-0 ${pryBgColor}`}
        >
          <p className={`${secTextColor}`}>Create Resume</p>
          <button onClick={closeModal}>
            <Close />
          </button>
        </header>
        <main className="pt-2 flex-1 overflow-y-scroll">
          <div className="flex p-2 flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p>Job position</p>
              <CustomTextField
                name={"resume_role"}
                type={"text"}
                label={""}
                containerClass={""}
                placeholder={"Enter role you are applying for"}
              />
            </div>

            <div className="flex flex-col gap-2">
              <p>Experience level</p>
              <CustomTextField
                name={"resume-experience"}
                type={"text"}
                label={""}
                containerClass={""}
                placeholder={"Select job position for your resume"}
              />
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={toggleTailorResume}
                className={`flex items-center gap-2 group/toggle-tailor-resume ${
                  tailorResume ? pryTextColor : `${secTextColor} opacity-60`
                }`}
              >
                <p className={`group-hover/toggle-tailor-resume:text-primary `}>
                  Do you want to target or fit your resume to a specific job?
                </p>
                {tailorResume ? (
                  <ToggleOn className="text-primary text-2xl" />
                ) : (
                  <ToggleOff className=" text-2xl" />
                )}
              </button>

              {tailorResume && (
                <section className="flex flex-col gap-2">
                  <p className={` ${secTextColor}`}>
                    If{" "}
                    <span className={`font-semibold ${pryTextColor}`}>Yes</span>
                    , paste the job description below:
                  </p>

                  <div className="flex flex-col gap-2">
                    <p>Job description</p>
                    <TextAreaCustom
                      id="resume-role-description"
                      type="text"
                      placeholder="Pase the Job description here if you are trying to tailor resume..."
                      minRows={3}
                    />
                  </div>
                </section>
              )}
            </div>
          </div>
          <div
            className={`gap-3 flex justify-end sticky bottom-0 ${pryBgColor} p-2`}
          >
            <OutlinedButton
              px={4}
              py={1}
              style={{ fontSize: "15px" }}
              className="rounded-md"
              onClick={() => {
                closeModal();
              }}
            >
              Cancel
            </OutlinedButton>

            <CurvedButton
              className="bg-primary"
              px={4}
              py={1}
              style={{ fontSize: "15px" }}
              onClick={() => {
                saveAndStartResumeFlow();
              }}
            >
              Next
            </CurvedButton>
          </div>
        </main>
      </div>
    </Modal>
  );
};

// const
const schoolStep = () => {};
const JobStep = () => {};

export default NewResumeModal;
