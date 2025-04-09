import { ReactNode, useRef } from "react";
// import { sizeConverterTW } from "../../utils/utilFunction";

type TextWithIconPropType = {
  text: string | ReactNode;
  icon: any;
  sizeType?: "px" | "rem" | "em";
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  flexPositions?: string;
  imageClassName?: string;
  buttonClassName?: string;
  textClass?: string;
  iconClassName?: string;
};

const TextWithIcon = ({
  text:Value,
  icon:Icon,
  width,
  height,
  sizeType,
  onClick,
  flexPositions,
  imageClassName,
  buttonClassName,
  textClass,
  iconClassName,
}: TextWithIconPropType) => {
  // SIZE CONVERTER
//   const size = useRef(sizeConverterTW({ width, height }, sizeType));

  return (
    <div
      className={`cursor-pointer flex gap-1 md:text-base text-sm ${
        flexPositions ? flexPositions : "items-center justify-center"
      } ${buttonClassName}`}
      onClick={onClick}
    >
      
      {typeof Value === "string" ? <p className={`text-main_bg ${textClass} dark:text-dark_primary_text`}>{Value}</p> :  Value}
      <div className={`${iconClassName} dark:text-dark_primary_text`}>
        <Icon/>
      </div>
    </div>
  );
};

export default TextWithIcon;
