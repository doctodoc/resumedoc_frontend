import { BackIcon } from "@/assets/svg";
import CloseIcon from "@/assets/svg/CloseIcon";
import CurvedButton from "@/components/buttons/CurvedButton";
import InputField from "@/components/inputs/InputField";
import useAuthModal from "@/lib/hooks/auth/useAuthModal";

type Props = {
  close: () => void;
};

const ForgotPasswordModal = ({ close }: Props) => {
  const { returnFromForgotPswdModal } = useAuthModal();
  const handleInputField = () => {};
  return (
    <div className="flex flex-col gap-4 p-4 px-4 dark:bg-secondary_dark">
      <header className="flex flex-col gap-3 border-light_border_color border-b-[1px] pb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold dark:text-dark_primary_text">
            Forgot Password
          </h1>
          <button onClick={close}>
            <CloseIcon />
          </button>
        </div>

        <p className="text-sm sm:text-base font-light max-w-[400px] text-primary">
          {"We'll send a password reset link to your email."}
        </p>
      </header>

      <section className="flex flex-col gap-6 my-4">
        <InputField
          id="email"
          type="email"
          title="Email"
          value={""}
          handleChange={handleInputField}
          isOutlined
        />

        <div className="w-full flex justify-center my-2">
          <CurvedButton className="text-base py-2 bg-primary text-white">
            {"Send Password reset link"}
          </CurvedButton>
        </div>
      </section>

      <section className="w-full flex justify-center">
        <button
          className="flex items-center dark:text-dark_secondary_text"
          onClick={returnFromForgotPswdModal}
        >
          <BackIcon />
          <p>Back to Login</p>
        </button>
      </section>
    </div>
  );
};

export default ForgotPasswordModal;
