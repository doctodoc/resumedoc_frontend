import React from 'react'

const TextCheckBox = ({
    isChecked,
    text,
    onClick,
    isInActive,
  }: {
    isChecked: boolean;
    text: string;
    onClick: () => void;
    isInActive?: boolean;
  }) => {
    return (
      <button className={`flex gap-4 text-start ${isInActive && 'cursor-not-allowed'}`} onClick={isInActive ? ()=>{}:onClick}>
        {isChecked && !isInActive ? (
          <CheckedIcon />
        ) : isInActive ? <CheckedIcon fill={"#E2E1E1"} />: (
          <img src={UnCheckedBlack} />
        )}
        <p
          className={`flex-wrap ${
            isChecked && !isInActive
              ? "text-checked "
              : isInActive
              ? "text-[#858181]"
              : "text-main_font"
          }
          
          `}
        >
          {text}
        </p>
      </button>
    );
  };

export default TextCheckBox