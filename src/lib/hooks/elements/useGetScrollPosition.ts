import React, { useEffect, useRef, useState } from "react";

type UseGetScrollPositionType = {
  ref?: React.LegacyRef<HTMLElement>;
  cb?: (param?: any) => void;
  relElRef: any
};

const useGetScrollPosition = ({relElRef}: UseGetScrollPositionType, cb = () => {}) => {
  const eleRef = useRef<any>(null);
  const scrollableEle = useRef<any>(null);

  const [position, setposition] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);

  const scrollEvent = () => {
    if (eleRef?.current) {
      const height =
        scrollableEle?.current?.scrollHeight -
        scrollableEle?.current?.clientHeight;

      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      setScrollPosition(winScroll);
      setposition(relElRef?.current.getBoundingClientRect().top);
      setScrollHeight(height);
      cb();
    }
  };

  useEffect(() => {
    console.log("second");
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [window.scrollY]);

  return { position, eleRef, scrollableEle, scrollPosition, scrollHeight };
};

export default useGetScrollPosition;
