import React from "react";
interface IntButton {
  activeStyleState: boolean;
  text: string;
  onClick: (ownId: number) => void;
  value: number;
}

const activeStyle = {
  bgColor: "#005DA1",
  textColor: "#FFF",
};
const defaultStyle = {
  bgColor: "#F2F2F2",
  textColor: "#262626",
};

function ModalButton({ activeStyleState, text, onClick, value }: IntButton) {
  return (
    <button
      onClick={() => {
        onClick(value);
      }}
      className={`rounded-[5px] flex px-[63px] py-[12px] justify-center items-center gap-[10px] flex-[1_1_0%] `}
      style={{
        backgroundColor: activeStyleState
          ? activeStyle.bgColor
          : defaultStyle.bgColor,
      }}
    >
      <p
        className={`text-[16px] text-[${
          activeStyleState ? activeStyle.textColor : defaultStyle.textColor
        }]`}
      >
        {text}
      </p>
    </button>
  );
}

export default ModalButton;
