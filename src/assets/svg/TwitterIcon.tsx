import React from "react";

type TwitterIconPropTypes = {
  className?: string;
};

const TwitterIcon = ({ className }: TwitterIconPropTypes) => {
  return (
    <div>
      <svg
        viewBox="0 0 50 50"
        className={`${className} fill-current h-5 flex items-center justify-center`}
      >
        <mask
          id="mask0_4091_8"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="50"
          height="50"
        >
          <path d="M50 0H0V50H50V0Z"  />
        </mask>
        <g mask="url(#mask0_4091_8)">
          <path d="M44.1406 0H5.85938C2.62333 0 0 2.62333 0 5.85938V44.1406C0 47.3767 2.62333 50 5.85938 50H44.1406C47.3767 50 50 47.3767 50 44.1406V5.85938C50 2.62333 47.3767 0 44.1406 0Z" fill="none"/>
          <path
            d="M34.7563 9.76562H39.925L28.6328 22.6719L41.9172 40.2344H31.5156L23.3688 29.5828L14.0469 40.2344H8.87505L20.9531 26.4297L8.20942 9.76562H18.875L26.2391 19.5016L34.7563 9.76562ZM32.9422 37.1406H35.8063L17.3188 12.6969H14.2453L32.9422 37.1406Z"
            
          />
        </g>
      </svg>
    </div>
  );
};

export default TwitterIcon;
