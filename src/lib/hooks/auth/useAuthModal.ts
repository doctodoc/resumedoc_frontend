"use client";

import {
  selectAuthRegType,
  setAuthRegType,
  setIsForgotPswd,
} from "@/lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/globalHooks";
import { AuthTypeEnum } from "@/shared/enums/authEnums";
import { AuthRegType } from "@/shared/types/authTypes";
import { useState } from "react";

const useAuthModal = () => {
  const dispatch = useAppDispatch();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const authType = useAppSelector(selectAuthRegType);

  const openAuthModal = (authType: AuthRegType) => {
    dispatch(setIsForgotPswd(false));
    dispatch(setAuthRegType(authType));
    if (!isAuthModalOpen) {
      setIsAuthModalOpen(true);
    }
  };
  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const toggleAuthType = () => {
    console.log("toggle");
    if (authType === AuthTypeEnum.signin) {
      dispatch(setAuthRegType(AuthTypeEnum.signup));
    } else {
      dispatch(setAuthRegType(AuthTypeEnum.signin));
    }
  };

  const openForgotPswdModal = () => {
    dispatch(setIsForgotPswd(true));
    if (!isAuthModalOpen) {
      setIsAuthModalOpen(true);
    }
  };

  const returnFromForgotPswdModal = () => {
    dispatch(setIsForgotPswd(false));
  };

  return {
    openAuthModal,
    isAuthModalOpen,
    closeAuthModal,
    toggleAuthType,
    openForgotPswdModal,
    returnFromForgotPswdModal,
  };
};

export default useAuthModal;
