import React from "react";
import { useCompanyContextHook } from "../context/companyContext";

function SimpleForm() {
  const ctx = useCompanyContextHook();

  return (
    <div className="flex flex-col items-start gap-[16px]">
      <div className="flex w-[500px] flex-col items-start gap-[4px]">
        <p className="text-[12px] text-[#808080]">Введите ИИН/БИН</p>
        <div className="flex h-[39px] px-[16px] items-center gap-[12px] self-stretch rounded-[5px] border-[1px] border-[#D1D1D1]">
          <input
            type="text"
            placeholder={ctx!.elToEdit!.company_tin}
            className="text-[14px] text-[#262626]"
          />
        </div>
      </div>
      <div className="flex w-[500px] flex-col items-start gap-[4px]">
        <p className="text-[12px] text-[#808080]">Введите название компании</p>
        <div className="flex h-[39px] px-[16px] items-center gap-[16px] self-stretch rounded-[5px] border-[1px] border-[#D1D1D1]">
          <div className="border-r-[1px] border-[##D1D1D1] h-[37px] flex items-center justify-center gap-[16px] pr-[12px]">
            <p className="text-[14px] text-[#262626]">TOO</p>
          </div>
          <div className="flex justify-start gap-[10px]">
            <input
              type="text"
              className="text-[14px] text-[#262626]"
              placeholder={ctx!.elToEdit!.company_name}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleForm;
