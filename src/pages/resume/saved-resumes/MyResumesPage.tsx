import { useDisclosure } from "@/components/modal/useDisclosure";
import CreatedResumes from "@/containers/dashboard/resumeAndEntries/CreatedResumes";
import NewResumeModal from "@/containers/dashboard/resumeAndEntries/newResumeFlowModal/NewResumeModal";
import React from "react";

const MyResumesPage = () => {
  const {
    isOpen: isNewResumeModalOpen,
    close: closeResumeModal,
    open: openNewResumeModal,
  } = useDisclosure();

  const createNewResume = () => {
    openNewResumeModal();
  };

  return (
    <div className="w-full flex justify-center">
      {isNewResumeModalOpen && <NewResumeModal closeModal={closeResumeModal} />}

      <main className="w-full flex flex-col justify-center gap-10">
        <CreatedResumes resumeList={[]} createNewResume={createNewResume} />
      </main>
    </div>
  );
};

export default MyResumesPage;
