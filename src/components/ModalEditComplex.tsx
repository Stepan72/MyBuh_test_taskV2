import React, { useState } from "react";
import cancelIcon from "./../assets/CancelIcon.svg";
import ModalButton from "./ModalButton";

function ModalEditComplex() {
  const [activeRadioOption, setActiveRadioOption] = useState<number>(0);

  return (
    <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-20">
      <div className=" p-[36px] inline-flex flex-col items-center gap-[28px] rounded bg-white">
        <p className="text-[18px] text-[#262626] font-semibold">
          Редактировать данные организации
        </p>
        <div className="rounded-lg self-stretch gap-[8px] flex items-start">
          <ModalButton activeStyleState={true} text="TOO" />
          <ModalButton activeStyleState={false} text="ИП" />
          <ModalButton activeStyleState={false} text="Прочие" />
        </div>
        <div className="flex w-[500px] flex-col items-start gap-[12px]">
          <div className="flex items-center gap-[6px]">
            <input
              type="radio"
              name="others"
              value="0"
              checked={activeRadioOption === 0}
              onChange={() => {
                setActiveRadioOption(0);
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
              value="1"
              checked={activeRadioOption === 1}
              onChange={() => {
                setActiveRadioOption(1);
              }}
              className="w-[20px] h-[20px]"
            />
            <label
              htmlFor="value2"
              className={`${
                activeRadioOption === 1 ? "text-[#005DA1]" : "text-[#808080]"
              } text-[16px]`}
            >
              Частная практика
            </label>
          </div>
          <div className="flex items-center gap-[6px]">
            <input
              type="radio"
              name="others"
              value={2}
              checked={activeRadioOption === 2}
              onChange={() => {
                setActiveRadioOption(2);
              }}
              className="w-[20px] h-[20px]"
            />
            <label
              htmlFor="value3"
              className={`${
                activeRadioOption === 2 ? "text-[#005DA1]" : "text-[#808080]"
              } text-[16px]`}
            >
              Физические лица
            </label>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[16px]">
          <div className="flex w-[500px] flex-col items-start gap-[4px]">
            <p className="text-[12px] text-[#808080]">
              Выберите форму собственности
            </p>
            <div className="flex h-[39px] px-[16px] justify-between items-center  self-stretch rounded-[5px] border-[1px] border-[#D1D1D1]">
              <select
                className="text-[14px] text-[#262626] self-stretch"
                name=""
                id=""
              >
                <option>Выбор 1</option>
                <option>Выбор 2</option>
                <option>Выбор 3</option>
              </select>
            </div>
          </div>
          <div className="flex w-[500px] flex-col items-start gap-[4px]">
            <p className="text-[12px] text-[#808080]">Введите ИИН/БИН</p>
            <div className="flex h-[39px] px-[16px] items-center gap-[12px] self-stretch rounded-[5px] border-[1px] border-[#D1D1D1]">
              <input
                type="text"
                placeholder="2698457/8421"
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
                <p className="text-[14px] text-[#262626]">TOO</p>
              </div>
              <div className="flex justify-start gap-[10px]">
                <input
                  className="text-[14px] text-[#262626]"
                  placeholder="Держите"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[10px] ">
          <button className="flex justify-center items-center px-[48px] py-[12px] gap-[10px] rounded-[4px] bg-[#009A3E] text-[#FFFFFF]">
            Сохранить
          </button>
        </div>
      </div>
      <button>
        <img
          src={cancelIcon}
          className="w-[16px] h-[16px] absolute right-[16px] top-[16px]"
          alt="cancelCrest"
        />
      </button>
    </div>
  );
}

export default ModalEditComplex;
