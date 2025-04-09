import CurvedButton from "@/components/buttons/CurvedButton";
import InputField from "@/components/inputs/InputField";
import { Modal, ModalCompProps } from "@/components/modal/Modal";
import { Close } from "@mui/icons-material";
import React, { useState } from "react";

interface Props extends ModalCompProps {}

const SaveResumeBioModal = ({ isOpen, close }: Props) => {
  const [bioName, setBioName] = useState("resume_bio_name");
  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleChangeBioName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBioName(e.target.value);
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <div className="min-w-[400px] max-w-[500px] px-3 pt-2 pb-4">
        <header className="flex justify-between ">
          <div className="dark:text-dark_primary_text">
            <p className="font-medium text-lg">Save as bio</p>
          </div>
          <button onClick={close} className="dark:text-dark_primary_text">
            <Close />
          </button>
        </header>

        <main className="flex flex-col gap-2 mt-3">
          <h1>Your Resume details would be saved for edit later</h1>
          <section className="flex flex-col mt-3">
            <p className="font-medium">Name Tag</p>
            <InputField
              placeholder="Bio tag"
              id="title_for_bio"
              value={bioName}
              autoFocus={true}
              onFocus={handleFocus}
              handleChange={handleChangeBioName}
              spellCheck={false}
              isOutlined
            />
          </section>
          <section className="w-full flex justify-center mt-3">
            <CurvedButton className="bg-primary text-white" py={"2"}>
              Save for Later
            </CurvedButton>
            {/* <CurvedButton>Download and Save</CurvedButton> */}
          </section>
        </main>
      </div>
    </Modal>
  );
};

export default SaveResumeBioModal;
