import { Path, Svg } from "@react-pdf/renderer";
import React from "react";

const TwitterIcon = ({ color }: { color?: string }) => {
  return (
    <Svg
      viewBox="0 0 50 50"
      fill="current"
      style={{
        color: color ? color : "#1E1E1E",
        height: "100%",
        width: "100%",
      }}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M46.875 9.375C46.875 5.92187 44.0781 3.125 40.625 3.125H9.375C5.92187 3.125 3.125 5.92187 3.125 9.375V40.625C3.125 44.0781 5.92187 46.875 9.375 46.875H40.625C44.0781 46.875 46.875 44.0781 46.875 40.625V9.375Z"
        fill="current"
      />
      <Path
        d="M11.7734 37.7187H14.8984L23.2422 28.2344L30.5 37.7031H38.9844L27.8516 22.9844L37.2734 12.2812H34.1484L26.4062 21.0781L19.7656 12.2891H11.0078L21.7812 26.3438L11.7656 37.7266L11.7734 37.7187ZM15.7656 14.625H18.6094L34.2813 35.3594H31.6641L15.7734 14.625H15.7656Z"
        fill="white"
      />
    </Svg>
  );
};

export default TwitterIcon;
