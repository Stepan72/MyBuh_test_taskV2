import React, { useState } from "react";
import cancelIcon from "./../assets/CancelIcon.svg";
import ModalButton from "./ModalButton";
import { useCompanyContextHook } from "../context/companyContext";

function ComplexForm() {
  const ctx = useCompanyContextHook();
  /// если тип не относится к прочим, чтобы по дефолту ставил АО в начале при нажатии на кнопку!
  const defaultStateOWn =
    ctx!.elToEdit!.ownership_id === 1 || ctx!.elToEdit!.ownership_id === 14
      ? 6
      : ctx!.elToEdit!.ownership_id;
  //// Стейты Радио и типа
  const [ownId, setOwnId] = useState<number>(defaultStateOWn);
  const [activeRadioOption, setActiveRadioOption] = useState<number>(
    ctx!.elToEdit!.ownership_id
  );

  //// для Имени и ИНН компании
  const [name, setName] = useState(ctx!.elToEdit!.company_name);
  const [inn, setInn] = useState(ctx!.elToEdit!.company_tin);
  /// для фильтрации селекта и отображения возможных селектов
  const ownWithoutParent = ctx!.ownerships!.filter((el) => {
    return el.parent_id !== null;
  });

  /// Для отображения имени типа
  const allOwnerships = ctx?.ownerships;
  const ownTypeName = allOwnerships!.find((own) => {
    return own.id === ownId;
  });

  //// Хендлеры
  function selectionHandler(e: React.ChangeEvent<HTMLSelectElement>) {
    // console.log(e.target.value);
    setOwnId(+e.target.value);
  }

  function changeNameHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function changeInnHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInn(e.target.value);
  }
  function saveEditedElementHandler() {
    const changedData = { name, inn, ownId, id: ctx!.elToEdit!.company_id };
    ctx!.changeElement(changedData);
  }

  return (
    <>
      <div className="flex w-[500px] flex-col items-start gap-[12px]">
        <div className="flex items-center gap-[6px]">
          <input
            type="radio"
            name="others"
            value={activeRadioOption}
            checked={activeRadioOption !== 15 && activeRadioOption !== 20}
            onChange={() => {
              setActiveRadioOption(0);
              setOwnId(6);
            }}
            className="w-[20px] h-[20px]"
          />
          <label
            htmlFor="value1"
            className={`${
              activeRadioOption === 0 ? "text-[#005DA1]" : "text-[#808080]"
            } text-[16px]`}
          >
            Юридические лица
          </label>
        </div>
        <div className="flex items-center gap-[6px]">
          <input
            type="radio"
            name="others"
            value={15}
            checked={activeRadioOption === 15}
            onChange={() => {
              setActiveRadioOption(15);
              setOwnId(15);
            }}
            className="w-[20px] h-[20px]"
          />
          <label
            htmlFor="value2"
            className={`${
              activeRadioOption === 15 ? "text-[#005DA1]" : "text-[#808080]"
            } text-[16px]`}
          >
            Частная практика
          </label>
        </div>
        <div className="flex items-center gap-[6px]">
          <input
            type="radio"
            name="others"
            value={20}
            checked={activeRadioOption === 20}
            onChange={() => {
              setActiveRadioOption(20);
              setOwnId(20);
            }}
            className="w-[20px] h-[20px]"
          />
          <label
            htmlFor="value3"
            className={`${
              activeRadioOption === 20 ? "text-[#005DA1]" : "text-[#808080]"
            } text-[16px]`}
          >
            Физические лица
          </label>
        </div>
      </div>
      <div className="flex flex-col items-start gap-[16px]">
        {ownId !== 15 && ownId !== 20 && (
          <div className="flex w-[500px] flex-col items-start gap-[4px]">
            <p className="text-[12px] text-[#808080]">
              Выберите форму собственности
            </p>
            <div className="flex h-[39px] px-[16px] justify-between items-center  self-stretch rounded-[5px] border-[1px] border-[#D1D1D1]">
              <select
                className="text-[14px] text-[#262626] self-stretch"
                value={ownId}
                onChange={selectionHandler}
              >
                {ownWithoutParent.map((el) => {
                  return (
                    <option key={el.id} value={el.id}>
                      {el.full}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        )}
        <div className="flex w-[500px] flex-col items-start gap-[4px]">
          <p className="text-[12px] text-[#808080]">Введите ИИН/БИН</p>
          <div className="flex h-[39px] px-[16px] items-center gap-[12px] self-stretch rounded-[5px] border-[1px] border-[#D1D1D1]">
            <input
              type="text"
              value={inn}
              onChange={changeInnHandler}
              className="text-[14px] text-[#262626]"
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

export default ComplexForm;
