import React, { useState } from "react";
import cancelIcon from "./../assets/CancelIcon.svg";
import ModalButton from "./ModalButton";
import { IEdit } from "../types/types";
import { useCompanyContextHook } from "../context/companyContext";
import SimpleForm from "./SimpleForm";
import ComplexForm from "./ComplexForm";

function ModalEdit({ onCancel }: IEdit) {
  const ctx = useCompanyContextHook();
  const [ownId, setOwnId] = useState(ctx?.elToEdit?.ownership_id);

  function changeOwnIdHandler(id: number) {
    setOwnId(id);
  }

  return (
    <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-20">
      <div className=" p-[36px] inline-flex flex-col items-center gap-[28px] rounded bg-white">
        <p className="text-[18px] text-[#262626] font-semibold">
          Редактировать данные организации
        </p>
        <div className="rounded-lg self-stretch gap-[12px] flex items-start">
          <ModalButton
            activeStyleState={ownId === 1}
            text="TOO"
            // value={1}
            // onClick={changeOwnIdHandler}
          />
          <ModalButton
            activeStyleState={ownId === 14}
            text="ИП"
            // value={14}
            // onClick={changeOwnIdHandler}
          />
          <ModalButton
            activeStyleState={ownId !== 1 && ownId !== 14}
            // onClick={changeOwnIdHandler}
            // value={[3, 5]}
            text="Прочие"
          />
        </div>
        {(ctx?.elToEdit?.ownership_id === 1 ||
          ctx?.elToEdit?.ownership_id === 14) && <SimpleForm />}
        {ctx?.elToEdit?.ownership_id !== 1 &&
          ctx?.elToEdit?.ownership_id !== 14 && <ComplexForm />}

        <div className="flex flex-col items-start gap-[10px] ">
          <button className="flex justify-center items-center px-[48px] py-[12px] gap-[10px] rounded-[4px] bg-[#009A3E] text-[#FFFFFF]">
            Сохранить
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          onCancel();
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

export default ModalEdit;
