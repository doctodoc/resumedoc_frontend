import React, { useEffect, useRef, useState } from "react";

type UseGetHeightType = {
  ref: any;
};

const useGetHeight = () => {
  const eleRef = useRef<any>(null);
  const [height, setHeight] = useState(0);
  const [winHeight, setwinHeight] = useState(0);
  const [bottom, setBottom] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    console.log("first");
    if (eleRef?.current) {
      setHeight(eleRef?.current.clientHeight);
      setBottom(eleRef?.current.getBoundingClientRect().bottom);
      setTop(eleRef?.current.getBoundingClientRect().top);
      setwinHeight(document.documentElement.clientHeight)
    }
  }, [eleRef, eleRef?.current]);
  return { height, eleRef, bottom, top, winHeight };
};

export default useGetHeight;
