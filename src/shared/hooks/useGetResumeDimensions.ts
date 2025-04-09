import { useCallback, useEffect, useState } from "react";

type Dimensions = {
  width: string;
  padding: string;
  baseText: string;
  headText: string;
};
type Props = {
  refVal?: any;
  baseText?: number; // text in px
  headText?: number;
};

const useGetResumeDimensions = ({ refVal, baseText, headText }: Props) => {
  const a4Width = 796.8
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: "",
    padding: "",
    baseText: "",
    headText: "",
  });

  const textConverter = useCallback(
    (text: number) => {
      const width = refVal.current?.offsetWidth ?? 0;
      return `${(text / a4Width) * width}px`;
    },
    [refVal.current]
  );

  const converter = useCallback(
    (val: number) => {
      const width = refVal.current?.offsetWidth ?? 0;
      return `${(val / a4Width) * width}px`;
    },
    [refVal.current]
  );

  useEffect(() => {
    if (!refVal.current) return;
    const resizeObserver = new ResizeObserver(() => {
      const width = refVal.current?.offsetWidth ?? 0;
      const baseTxt = baseText ?? 12;
      const headTxt = headText ?? 20;

      setDimensions({
        width: `${width}px`,
        padding: `${(48 / a4Width) * width}px`,
        baseText: `${(baseTxt / a4Width) * width}px`,
        headText: `${(headTxt / a4Width) * width}px`,
      });
    });

    // the code in useEffect will be executed when the component
    // has mounted, so we are certain observedDiv.current will contain
    // the div we want to observe
    resizeObserver.observe(refVal.current);

    return function cleanup() {
      resizeObserver.disconnect();
    };
  }, [refVal.current]);

  return { ...dimensions, textConverter, converter };
};

export default useGetResumeDimensions;
