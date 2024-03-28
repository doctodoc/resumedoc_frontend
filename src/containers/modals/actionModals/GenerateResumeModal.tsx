import { pryBgColor } from "@/assets/css/tailwindcss";
import CurvedButton from "@/components/buttons/CurvedButton";
import { Modal } from "@/components/modal";
import { ModalCompProps } from "@/components/modal/Modal";
import ResumeTemplateSelected from "@/containers/resume/buildResume/resumeTemplate/ResumeTemplateSelected";
import { Close } from "@mui/icons-material";
import React from "react";

interface Props extends ModalCompProps {}

const GenerateResumeModal = ({ isOpen, close }: Props) => {
  return (
    <Modal isOpen={isOpen} close={close} dialogClassName="w-fit">
      <div className="flex flex-col w-[90vw] px-3 xl:px-5 pt-3 h-[80vh]">
        <header className="flex justify-between ">
          <div className="dark:text-dark_primary_text">
            <p>Generate Resume</p>
          </div>
          <button onClick={close} className="dark:text-dark_primary_text">
            <Close />
          </button>
        </header>

        <section className="mt-3 md:mt-5 text-center flex flex-col justify-between flex-1 overflow-y-auto">
          <div className="flex-1 flex flex-col gap-4 ">
            <h1 className="md:text-lg">Select Template</h1>
            <div className="py-6 ">
              <ResumeTemplateSelected resumeClass="max-w-[870px] w-[70%] min-w-[200px]" />
            </div>
          </div>

          <div
            className={` sticky bottom-0 flex gap-4 md:gap-8 w-full justify-center p-3 ${pryBgColor}`}
          >
            <CurvedButton
              className="bg-grey_icon dark:bg-black text-white"
              py={"2"}
            >
              Save
            </CurvedButton>
            <CurvedButton className="bg-primary text-white" py={"2"}>
              Download and Save
            </CurvedButton>
          </div>
        </section>
      </div>
    </Modal>
  );
};

export default GenerateResumeModal;
