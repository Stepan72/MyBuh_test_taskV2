import React, { useState } from "react";
import { useCompanyContextHook } from "../context/companyContext";

function SimpleForm(props: { ownId: number }) {
  const ctx = useCompanyContextHook();
  //// для Имени и ИНН компании
  const [name, setName] = useState(ctx!.elToEdit!.company_name);
  const [inn, setInn] = useState(ctx!.elToEdit!.company_tin);
  /// Для отображения имени типа
  const ownTypeName = ctx!.ownerships!.find((own) => {
    return own.id === props.ownId;
  });

  //// Хендлеры
  function changeNameHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function changeInnHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInn(e.target.value);
  }
  function saveEditedElementHandler() {
    const changedData = {
      name,
      inn,
      ownId: props.ownId,
      id: ctx!.elToEdit!.company_id,
    };
    ctx!.changeElement(changedData);
  }

  return (
    <>
      <div className="flex flex-col items-start gap-[16px]">
        <div className="flex w-[500px] flex-col items-start gap-[4px]">
          <p className="text-[12px] text-[#808080]">Введите ИИН/БИН</p>
          <div className="flex h-[39px] px-[16px] items-center gap-[12px] self-stretch rounded-[5px] border-[1px] border-[#D1D1D1]">
            <input
              type="text"
              value={inn}
              onChange={changeInnHandler}
              className="text-[14px] text-[#262626] "
            />
          </div>
        </div>
        <div className="flex w-[500px] flex-col items-start gap-[4px]">
          <p className="text-[12px] text-[#808080]">
            Введите название компании
          </p>
          <div className="flex h-[39px] px-[16px] items-center gap-[16px] self-stretch rounded-[5px] border-[1px] border-[#D1D1D1]">
            <div className="border-r-[1px] border-[##D1D1D1] h-[37px] flex items-center justify-center gap-[16px] pr-[12px]">
              <p className="text-[14px] text-[#262626]">{ownTypeName?.short}</p>
            </div>
            <div className="flex justify-start gap-[10px]">
              <input
                type="text"
                className="text-[14px] text-[#262626]"
                value={name}
                onChange={changeNameHandler}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[10px] ">
        <button
          onClick={saveEditedElementHandler}
          className="flex justify-center items-center px-[48px] py-[12px] gap-[10px] rounded-[4px] bg-[#009A3E] text-[#FFFFFF]"
        >
          Сохранить
        </button>
      </div>
    </>
  );
}

export default SimpleForm;
