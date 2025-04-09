import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { pryBgColor, pryTextColor } from "@/assets/css/tailwindcss";
import { CloseIcon } from "@/assets/svg";

export interface ModalCompProps {
  isOpen: boolean;
  close: () => void;
  children?: JSX.Element;
  dialogClassName?: string;
  shouldPreventUserFromClosing?: boolean; // specifies if user should not be able to close the modal.
  
}

export const Modal = ({
  isOpen,
  children,
  dialogClassName,
  shouldPreventUserFromClosing,
  close,
 
}: ModalCompProps) => {
  const handleClose = shouldPreventUserFromClosing
    ? () => {
        return;
      }
    : close;

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[292929]" onClose={handleClose}>
        {/* overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.25)] dark:bg-[rgba(0,0,0,0.50)] bg-opacity-75 dark:bg-opacity-100 transition-opacity" />
        </Transition.Child>

        {/* main modal container */}
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {/* main modal panel */}
              <Dialog.Panel
                className={`relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all min-w-[100px] max-w-[99%] min-h-fit max-h-[90vh] dark:text-dark_primary_text ${dialogClassName} ${pryBgColor}`}
              >
                
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
