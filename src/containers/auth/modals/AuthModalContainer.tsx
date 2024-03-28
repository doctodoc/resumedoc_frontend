import CloseIcon from "@/assets/svg/CloseIcon";
import CheckText from "@/components/tags/ApprovedText";
import { AuthTypeEnum } from "@/shared/enums/authEnums";
import { AuthRegType } from "@/shared/types/authTypes";
import React from "react";
import AuthFormContainer from "../AuthFormContainer";

type Props = {
  authType: AuthRegType;
  close: () => void;
};

const AuthModalContainer = ({ authType, close, ...props }: Props) => {
  return (
    <div className="dark:bg-secondary_dark flex gap-3 md:flex-row w-full sm:w-fit md:max-w-[700px] xl:max-w-[900px] xl:max-h-[calc(100vh)] p-4">
      {/* banner */}
      <section className="w-[45%] min-w-[250px] hidden sm:flex flex-col">
        <div className="w-full ">
          {/* banner */}
          {/* <img
                  src={AuthBanner}
                  alt="auth banner"
                  className="w-full object-cover"
                /> */}
        </div>
        <div className="flex flex-col p-3 gap-3 md:gap-5">
          <h1 className="text-lg font-semibold dark:text-dark_primary_text">
            Join for free today and get access to:
          </h1>
          <div className="flex flex-col gap-5 ml-3">
            <CheckText>
              {"Success Proven Customizable Resume Templates."}
            </CheckText>
            <CheckText>{"Resume Experts Across Different Fields."}</CheckText>
            <CheckText>
              {"Resume Analysis and Tips from Professional"}
            </CheckText>
          </div>
        </div>
      </section>

      {/* form */}
      <section className="flex flex-col gap-4 xl:gap-6 flex-1 p-4 ml-2">
        <header className="flex flex-col gap-4 justify-between w-full">
          <div className="flex justify-between w-full">
            <div className="font-semibold dark:text-dark_primary_text">
              {"ResumeDoc"}
            </div>
            <button onClick={close}>
              <CloseIcon />
            </button>
          </div>
          {authType === AuthTypeEnum.signup && (
            <h1 className="text-lg sm:text-lg xl:text-xl font-semibold dark:text-dark_primary_text">
              <span className="text-primary">{"Join Now "}</span>
              {"and Get access to Resume resources "}
            </h1>
          )}

          {authType === AuthTypeEnum.signin && (
            <h1 className="text-lg sm:text-lg xl:text-xl font-semibold dark:text-dark_primary_text">
              <span className="text-primary">{"Welcome "}</span>
              {"back! Please Sign in "}
            </h1>
          )}
        </header>

        <AuthFormContainer {...props} authType={authType} />
      </section>
    </div>
  );
};

export default AuthModalContainer;
