import React, { useEffect, useRef, useState } from "react";

const usePopUpMenu = () => {
  const popUpRef = useRef<HTMLDivElement | null>(null);
  const [popUpState, setPopUpState] = useState(false);

  const closePopUp = () => {
    setPopUpState(false);
  };

  const openPopUp = () => {};
  const togglePopUp = () => {
    setPopUpState(!popUpState);
  };

  // const [listening, setListening] = useState(false);
  const unListen = () => {
    document?.removeEventListener(`click`, evListener);
  };

  const evListener = (evt: any) => {
    if (popUpRef?.current?.contains(evt?.target)) return;
    closePopUp();
    unListen();
  };

  const listenForOutsideClicks = () => {
    return () => {
      if (!popUpRef?.current) return;
      document?.addEventListener(`click`, evListener);
    };
  };

  useEffect(
    listenForOutsideClicks(),
    // if (!dropdownRef?.current) document?.removeEventListener(`click`, evListener, true);

    [popUpState]
  );

  return {
    listenForOutsideClicks,
    popUpRef,
    unListen,
    closePopUp,
    openPopUp,
    popUpState,
    togglePopUp,
  };
};

export default usePopUpMenu;
