import React from "react";
import CorporationLogoContainer from "./CorporationLogoContainer";
import editLogo from "./../assets/EditIcon.svg";
import deleteLogo from "./../assets/DeleteIcon.svg";

function CorporationContainer() {
  return (
    <div className="px-[32px] py-[24px] flex items-center gap-5 self-stretch rounded-md bg-[#FFF] shadow-[0_0px_12px_2px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-7 flex-[1_1_0%]">
        {/* //// переделать под лого пропрс /// */}
        <CorporationLogoContainer />
        <div className="flex flex-col justify-center items-start gap-3 flex-[1_1_0%]">
          <p className="text-[#262626] text-[14px]">
            {/* //// переделать под нейм пропрс /// */}
            ИП делаем шустро быстро аккуратно
          </p>
          <div className="flex items-start gap-[10px]">
            <p className="text-[#262626] text-[14px]">
              {/* //// переделать под иин пропрс /// */}
              ИИН/БИН{" "}
            </p>
            <p className="text-[#262626] text-[14px]">982312342512</p>
          </div>
        </div>
      </div>
      <button>
        <img src={editLogo} className="w-6 h-6" alt="edit-icon" />
      </button>
      <button>
        <img src={deleteLogo} className="w-6 h-6" alt="delete-icon" />
      </button>
    </div>
  );
}

export default CorporationContainer;
