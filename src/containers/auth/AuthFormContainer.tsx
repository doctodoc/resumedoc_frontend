"use client";

import InputField from "@/components/inputs/InputField";
import RoundedButton from "../../components/buttons/RoundedButton";
import { AuthTypeEnum } from "@/shared/enums/authEnums";
import CurvedButton from "@/components/buttons/CurvedButton";
import useAuthModal from "@/lib/hooks/auth/useAuthModal";

export interface AuthCompProps {
  authType: "signin" | "signup" | "login" | null;
}

const AuthFormContainer = ({ authType }: AuthCompProps) => {
  const handleInputField = () => {};
  const { toggleAuthType, openForgotPswdModal } = useAuthModal();

  const handleSubmit = () => {};

  return (
    <div className="max-w-[600px]">
      <form onSubmit={handleSubmit}>
        <div>
          {/* 3rd Party Auth */}

          {/* in-house Auth */}
          <div className="flex flex-col gap-2 xl:gap-4">
            {authType === "signup" && (
              <InputField
                id="name"
                type="name"
                title="Full Name"
                value={""}
                handleChange={handleInputField}
                isOutlined
              />
            )}
            <InputField
              id="email"
              type="email"
              title="Email"
              value={""}
              handleChange={handleInputField}
              isOutlined
            />
            <InputField
              id="password"
              type="email"
              title="Password"
              value={""}
              handleChange={handleInputField}
              isOutlined
            />
          </div>

          {authType === AuthTypeEnum.signin && (
            <div className="w-full flex justify-end mt-2">
              <button
                className="text-primary text-sm"
                type="button"
                onClick={openForgotPswdModal}
              >
                {"Forgot Password?"}
              </button>
            </div>
          )}
        </div>

        <CurvedButton className="w-full mt-4 xl:mt-10 py-2 bg-primary text-white font-semibold">
          {`${
            authType === AuthTypeEnum.signin ? "Login" : "Create an account"
          }`}
        </CurvedButton>

        <div className="w-full flex justify-center mt-4 dark:text-dark_secondary_text">
          <button type="button" onClick={toggleAuthType}>
            {authType === AuthTypeEnum.signin ? (
              <p>
                {"Don't have an account? "}
                <span className="text-primary">{"Sign Up"}</span>
              </p>
            ) : (
              <p>
                {"Already have an account? "}
                <span className="text-primary">{"Log in"}</span>
              </p>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthFormContainer;
