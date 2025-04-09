import { Modal } from "@/components/modal";
import { selectAuthRegType, selectIsForgotPswd } from "@/api/slices/auth/slice";
import { useAppSelector } from "@/lib/hooks/globalHooks";
import AuthModalContainer from "./AuthModalContainer";
import ForgotPasswordModal from "./ForgotPasswordModal";

interface Props {
  isOpen: boolean;
  close: () => void;
  // authType: "signin" | "signup" | "login" | null
}

const AuthModal = ({ isOpen, close }: Props) => {
  const authType = useAppSelector(selectAuthRegType);
  const isForgotPswd = useAppSelector(selectIsForgotPswd);

  return (
    <Modal isOpen={isOpen} close={close}>
      {isForgotPswd ? (
        <ForgotPasswordModal close={close} />
      ) : (
        <AuthModalContainer authType={authType} close={close} />
      )}
    </Modal>
  );
};

export default AuthModal;
