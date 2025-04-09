import { Path, Svg } from "@react-pdf/renderer";
import React from "react";

const MediumIcon = ({ color }: { color?: string }) => {
  return (
    <Svg
      viewBox="0 0 96 54"
      fill="current"
      style={{
        color: color ? color : "#1E1E1E",
        height: "100%",
        width: "100%",
      }}
    >
      <Path d="M27.314 0.072998C12.505 0.072998 0.5 12.156 0.5 27.07C1.914 62.888 52.72 62.871 54.128 27.07C54.128 12.16 42.122 0.072998 27.314 0.072998ZM70.137 1.656C62.733 1.656 56.73 13.037 56.73 27.07C57.465 60.795 82.811 60.796 83.545 27.07C83.544 13.038 77.541 1.656 70.137 1.656ZM90.861 4.3C84.667 4.737 84.68 49.428 90.86 49.84C97.052 49.406 97.041 4.71 90.861 4.3Z" />
    </Svg>
  );
};

export default MediumIcon;
