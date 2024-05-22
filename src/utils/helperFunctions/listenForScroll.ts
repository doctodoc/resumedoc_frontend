/**
 * Returns object with the scroll properties or position
 *
 * @param {function} funct the function to be called for the scroll condition.
 * @returns {{scrollHeight}} scroll position
 */

import { useEffect, useState } from "react";

type ParamType = (param?: any) => void;
type scrollPropsType = {
  scrollY: number;
} | null;

function useListenForScroll(funct?: ParamType) {
  const [scrollProps, setScrollProps] = useState<scrollPropsType>(null);
  const scrollEvent = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    // const height =
    //   document.documentElement.scrollHeight -
    //   document.documentElement.clientHeight;
    const scrolled = winScroll;
    setScrollProps({ ...scrollProps, scrollY: scrolled });
    if (funct) funct();
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [window.scrollY]);
  return { ...scrollProps };
}
export default useListenForScroll;
