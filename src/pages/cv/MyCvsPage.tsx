import { useDisclosure } from "@/components/modal/useDisclosure";
import CreatedAcademicCv from "@/containers/dashboard/academicCv/CreateAcademicCv";
import NewAcademicCvModal from "@/containers/dashboard/academicCv/NewAcademicModal";
import React from "react";

const MyCvsPage = () => {
  const {
    isOpen: isNewCvModalOpen,
    close: closeCvModal,
    open: openNewCvModal,
  } = useDisclosure();

  const createNewCv = () => {
    openNewCvModal();
  };

  return (
    <div className="w-full flex justify-center">
      {isNewCvModalOpen && <NewAcademicCvModal closeModal={closeCvModal} />}

      <main className="w-full flex flex-col justify-center gap-10">
        <CreatedAcademicCv cvList={[]} createNewCv={createNewCv} />
      </main>
    </div>
  );
};

export default MyCvsPage;
