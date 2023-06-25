import React from "react";
import unknownLogo from "./../assets/UnknownIcon.svg";

///// Через пропс надо будет передавать лого корпорации или стандартную

function CorporationLogoContainer() {
  return (
    <div className="flex p-3 items-start gap-[10px] rounded-[3px] bg-[#E8ECEE]">
      <img src={unknownLogo} className="w-12 h-12" alt="corp-icon" />
    </div>
  );
}

export default CorporationLogoContainer;
