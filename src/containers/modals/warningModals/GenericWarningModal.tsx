import CurvedButton from "@/components/buttons/CurvedButton";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import RoundedButton from "@/components/buttons/RoundedButton";
import { Modal } from "@/components/modal";
import { Close } from "@mui/icons-material";

export type WarningProps = {
  isOpen: boolean;
  close: () => void;
  proceed: (id?: string) => void;
  headerText?: string;
  proceedButtonText?: string;
  warningMsg?: string;
};

const GenericWarningModal = ({
  isOpen,
  close,
  proceed,
  proceedButtonText,
  warningMsg,
  headerText,
}: WarningProps) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <div className="flex flex-col items-center justify-center p-3 py-4 md:p-8 gap-7">
        <div className="absolute top-2 right-2 md:top-4 md:right-4">
          <button onClick={close}>
            <Close />
          </button>
        </div>
        <section className="mt-8 text-center flex flex-col gap-4 ">
          {headerText && (
            <h1 className="font-semibold text-[18px] md:text-lg text-main_bg hover:text-main_bg/70">
              {headerText}
            </h1>
          )}
          <p className="dark:text-dark_secondary_text">{warningMsg}</p>
        </section>
        <section className="w-full flex gap-4 md:gap-6 justify-center">
          <OutlinedButton
            onClick={close}
            py={"1"}
            className="border-grey_icon rounded-md"
          >
            Cancel
          </OutlinedButton>
          <CurvedButton
            onClick={proceed}
            py={"1"}
            className="bg-grey_icon text-white"
          >
            {proceedButtonText || "Proceed"}
          </CurvedButton>
        </section>
      </div>
    </Modal>
  );
};

export default GenericWarningModal;
