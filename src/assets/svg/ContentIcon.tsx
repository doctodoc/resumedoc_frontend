import React from "react";

type Props = {
  className?: string;
};
const ContentIcon = ({ className }: Props) => {
  return (
    <svg
      viewBox="0 0 50 50"
      fill="none"
      className={`w-full h-full fill-current ${className}`}
    >
      <path d="M39.5834 0H10.4167C6.96362 0 4.16675 2.79687 4.16675 6.25V43.75C4.16675 47.2031 6.96362 50 10.4167 50H39.5834C43.0365 50 45.8334 47.2031 45.8334 43.75V6.25C45.8334 2.79687 43.0365 0 39.5834 0ZM41.6667 43.75C41.6667 44.901 40.7345 45.8333 39.5834 45.8333H10.4167C9.26571 45.8333 8.33341 44.901 8.33341 43.75V6.25C8.33341 5.09896 9.26571 4.16667 10.4167 4.16667H39.5834C40.7345 4.16667 41.6667 5.09896 41.6667 6.25V43.75ZM33.3334 35.4167H16.6667C16.1142 35.4167 15.5843 35.6362 15.1936 36.0269C14.8029 36.4176 14.5834 36.9475 14.5834 37.5C14.5834 38.0525 14.8029 38.5824 15.1936 38.9731C15.5843 39.3638 16.1142 39.5833 16.6667 39.5833H33.3334C33.8859 39.5833 34.4159 39.3638 34.8066 38.9731C35.1973 38.5824 35.4167 38.0525 35.4167 37.5C35.4167 36.9475 35.1973 36.4176 34.8066 36.0269C34.4159 35.6362 33.8859 35.4167 33.3334 35.4167ZM33.3334 27.0833H16.6667C16.1142 27.0833 15.5843 27.3028 15.1936 27.6935C14.8029 28.0842 14.5834 28.6141 14.5834 29.1667C14.5834 29.7192 14.8029 30.2491 15.1936 30.6398C15.5843 31.0305 16.1142 31.25 16.6667 31.25H33.3334C33.8859 31.25 34.4159 31.0305 34.8066 30.6398C35.1973 30.2491 35.4167 29.7192 35.4167 29.1667C35.4167 28.6141 35.1973 28.0842 34.8066 27.6935C34.4159 27.3028 33.8859 27.0833 33.3334 27.0833ZM33.3334 18.75H16.6667C16.1142 18.75 15.5843 18.9695 15.1936 19.3602C14.8029 19.7509 14.5834 20.2808 14.5834 20.8333C14.5834 21.3859 14.8029 21.9158 15.1936 22.3065C15.5843 22.6972 16.1142 22.9167 16.6667 22.9167H33.3334C33.8859 22.9167 34.4159 22.6972 34.8066 22.3065C35.1973 21.9158 35.4167 21.3859 35.4167 20.8333C35.4167 20.2808 35.1973 19.7509 34.8066 19.3602C34.4159 18.9695 33.8859 18.75 33.3334 18.75ZM16.6667 14.5833H25.0001C25.5526 14.5833 26.0825 14.3638 26.4732 13.9731C26.8639 13.5824 27.0834 13.0525 27.0834 12.5C27.0834 11.9475 26.8639 11.4176 26.4732 11.0269C26.0825 10.6362 25.5526 10.4167 25.0001 10.4167H16.6667C16.1142 10.4167 15.5843 10.6362 15.1936 11.0269C14.8029 11.4176 14.5834 11.9475 14.5834 12.5C14.5834 13.0525 14.8029 13.5824 15.1936 13.9731C15.5843 14.3638 16.1142 14.5833 16.6667 14.5833Z" />

      {/* <path d="M18.7499 20.8333H20.8333C21.3858 20.8333 21.9157 20.6138 22.3064 20.2231C22.6971 19.8324 22.9166 19.3025 22.9166 18.75C22.9166 18.1974 22.6971 17.6675 22.3064 17.2768C21.9157 16.8861 21.3858 16.6666 20.8333 16.6666H18.7499C18.1974 16.6666 17.6675 16.8861 17.2768 17.2768C16.8861 17.6675 16.6666 18.1974 16.6666 18.75C16.6666 19.3025 16.8861 19.8324 17.2768 20.2231C17.6675 20.6138 18.1974 20.8333 18.7499 20.8333ZM18.7499 25C18.1974 25 17.6675 25.2195 17.2768 25.6102C16.8861 26.0009 16.6666 26.5308 16.6666 27.0833C16.6666 27.6358 16.8861 28.1657 17.2768 28.5564C17.6675 28.9471 18.1974 29.1666 18.7499 29.1666H31.2499C31.8025 29.1666 32.3324 28.9471 32.7231 28.5564C33.1138 28.1657 33.3333 27.6358 33.3333 27.0833C33.3333 26.5308 33.1138 26.0009 32.7231 25.6102C32.3324 25.2195 31.8025 25 31.2499 25H18.7499ZM41.6666 18.625C41.6449 18.4336 41.603 18.245 41.5416 18.0625V17.875C41.4414 17.6607 41.3078 17.4638 41.1458 17.2916L28.6458 4.79163C28.4735 4.62958 28.2766 4.49596 28.0624 4.39579C28.0002 4.38696 27.9371 4.38696 27.8749 4.39579C27.6633 4.27442 27.4296 4.19651 27.1874 4.16663H14.5833C12.9256 4.16663 11.3359 4.82511 10.1638 5.99721C8.99173 7.16931 8.33325 8.75902 8.33325 10.4166V39.5833C8.33325 41.2409 8.99173 42.8306 10.1638 44.0027C11.3359 45.1748 12.9256 45.8333 14.5833 45.8333H35.4166C37.0742 45.8333 38.6639 45.1748 39.836 44.0027C41.0081 42.8306 41.6666 41.2409 41.6666 39.5833V18.75C41.6666 18.75 41.6666 18.75 41.6666 18.625ZM29.1666 11.2708L34.5624 16.6666H31.2499C30.6974 16.6666 30.1675 16.4471 29.7768 16.0564C29.3861 15.6657 29.1666 15.1358 29.1666 14.5833V11.2708ZM37.4999 39.5833C37.4999 40.1358 37.2804 40.6657 36.8897 41.0564C36.499 41.4471 35.9691 41.6666 35.4166 41.6666H14.5833C14.0307 41.6666 13.5008 41.4471 13.1101 41.0564C12.7194 40.6657 12.4999 40.1358 12.4999 39.5833V10.4166C12.4999 9.86409 12.7194 9.33419 13.1101 8.94349C13.5008 8.55279 14.0307 8.33329 14.5833 8.33329H24.9999V14.5833C24.9999 16.2409 25.6584 17.8306 26.8305 19.0027C28.0026 20.1748 29.5923 20.8333 31.2499 20.8333H37.4999V39.5833ZM31.2499 33.3333H18.7499C18.1974 33.3333 17.6675 33.5528 17.2768 33.9435C16.8861 34.3342 16.6666 34.8641 16.6666 35.4166C16.6666 35.9692 16.8861 36.4991 17.2768 36.8898C17.6675 37.2805 18.1974 37.5 18.7499 37.5H31.2499C31.8025 37.5 32.3324 37.2805 32.7231 36.8898C33.1138 36.4991 33.3333 35.9692 33.3333 35.4166C33.3333 34.8641 33.1138 34.3342 32.7231 33.9435C32.3324 33.5528 31.8025 33.3333 31.2499 33.3333Z" /> */}
    </svg>
  );
};

export default ContentIcon;
