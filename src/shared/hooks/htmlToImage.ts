import { toPng, toJpeg, toSvg } from "html-to-image";
import { useEffect, useState } from "react";
import _ from "lodash";

export const useHtmlToImageConvert = (
  elementRef: any,
  triggerUpdateProp: any
) => {
  const [imageData, setImageData] = useState<string | null>(null);

  const convertHtmlToImage = () => {
    let result;
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        setImageData(dataUrl);
      })
      .catch((err) => {
        console.log(err);
        err;
      });
    // return result;
  };

  useEffect(() => {
    if (elementRef) {
      const delayedUpdate = _.debounce(convertHtmlToImage, 300, {
        trailing: true,
      });
      delayedUpdate();
      return () => delayedUpdate.cancel();
    }
  }, [elementRef, triggerUpdateProp]);

  return { imageData };
};
