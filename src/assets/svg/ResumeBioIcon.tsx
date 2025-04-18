import React from "react";

type Props = {
  className: string;
};

const ResumeBioIcon = ({ className }: Props) => {
  return (
    <div>
      <svg
        className={`${className} fill-transparent stroke-current w-full h-full`}
        viewBox="0 0 50 50"
      >
        <path
          d="M9.89587 9.89587C9.89587 7.30702 11.9945 5.20837 14.5834 5.20837H29.8542C30.8195 5.20837 31.7454 5.59119 32.4288 6.27285L37.0501 10.8823L38.628 12.6075C39.2425 13.2795 39.5834 14.1573 39.5834 15.068V40.1042C39.5834 42.6931 37.4847 44.7917 34.8959 44.7917H14.5834C11.9945 44.7917 9.89587 42.6931 9.89587 40.1042V9.89587Z"
          strokeWidth="3"
        />
        <path
          d="M30.7291 5.72913V13.0208C30.7291 13.8838 31.4287 14.5833 32.2916 14.5833H39.5833"
          strokeWidth="3"
        />
        <path
          d="M15.625 30.7291H33.8542M15.625 36.9791H19.0797M25 36.9791H34.375"
          strokeWidth="3"
          stroke-linecap="round"
        />
        <path
          d="M21.8749 17.7084C18.7596 17.7084 16.1767 19.9991 15.7027 22.996C15.6147 23.5522 16.0581 24.0237 16.6195 24.0676C20.1178 24.3416 23.6321 24.3416 27.1304 24.0676C27.6918 24.0237 28.1351 23.5522 28.0472 22.996C27.5732 19.9991 24.9903 17.7084 21.8749 17.7084Z"
          fill="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M21.875 17.7084C23.6009 17.7084 25 16.3093 25 14.5834C25 12.8575 23.6009 11.4584 21.875 11.4584C20.1491 11.4584 18.75 12.8575 18.75 14.5834C18.75 16.3093 20.1491 17.7084 21.875 17.7084Z"
          fill="white"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};

export default ResumeBioIcon;
