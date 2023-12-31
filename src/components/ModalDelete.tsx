import React from "react";
import cancelIcon from "./../assets/CancelIcon.svg";

function ModalDelete(props: { onDelete: () => void; onCancel: () => void }) {
  return (
    <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-20">
      <div className="flex w-[550px] px-[48px] pt-[32px] pb-[40px] flex-col items-center gap-[16px] rounded-md bg-[#FFF] ">
        <div className="flex flex-col justify-center items-start gap-[28px] self-stretch ">
          <div className="text-center self-stretch">
            <p className="text-[#262626]  text-[18px] font-semibold">
              Удаление организации
            </p>
          </div>
          <div className="text-center self-stretch">
            <p className="text-[#262626]  text-[18px]">
              Вы уверены, что хотите удалить организацию из списка?
            </p>
          </div>

          <div className="flex justify-end items-center gap-[20px] self-stretch">
            <button
              onClick={() => {
                props.onCancel();
              }}
              className="flex w-[149px] h-[39px] px-[56px] py-[10px] justify-center items-center gap-[10px] rounded border-[1px] border-[#005DA1] bg-[#FFF]"
            >
              <p className="text-[#005DA1] text-[14px]">Отменить</p>
            </button>
            <button
              onClick={() => {
                props.onDelete();
              }}
              className="flex h-[39px] px-[48px] py-[10px] justify-center items-center gap-[10px] flex-[1_1_0%] rounded bg-[#005DA1]"
            >
              <p className="text-[#FFF] text-[14px]">Удалить</p>
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          props.onCancel();
        }}
      >
        <img
          src={cancelIcon}
          className="w-[16px] h-[16px] absolute right-[16px] top-[16px]"
          alt="cancelCrest"
        />
      </button>
    </div>
  );
}

export default ModalDelete;
