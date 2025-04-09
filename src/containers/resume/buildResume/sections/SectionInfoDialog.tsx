import { useDialog } from "@/api/zustand/stores/dialog";
import { Modal } from "@/components/ui/Modal";
import React, { ReactNode } from "react";

type Props = {
  content?: any;
  close: () => void;
  isOpen: boolean;
};

const SectionInfoDialog = ({ content, close, isOpen }: Props) => {
  return (
    <Modal
      close={close}
      isOpen={isOpen}
      dialogClassName="w-[800px] h-[90vh]"
      title="Help"
    >
      <div>{content}</div>
    </Modal>
  );
};

export default SectionInfoDialog;
