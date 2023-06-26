import React from "react";
import unknownLogo from "./../assets/UnknownIcon.svg";

///// Через пропс надо будет передавать лого корпорации или стандартную

function CorporationLogoContainer(props: { logo: string | null }) {
  return (
    <div className="flex p-3 items-start gap-[10px] rounded-[3px] bg-[#E8ECEE]">
      <img
        src={props.logo ? props.logo : unknownLogo}
        className="w-12 h-12 object-contain"
        alt="corp-icon"
      />
    </div>
  );
}

export default CorporationLogoContainer;
