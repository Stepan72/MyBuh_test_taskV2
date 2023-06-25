import React from "react";

import "./App.css";
import CorporationContainer from "./components/CorporationContainer";
import ModalDelete from "./components/ModalDelete";
import Backdrop from "./components/BackDrop";
import ModalEdit from "./components/ModalEdit";

const containers = [1, 2, 3, 4];
const modalDeleteState = true;
const modalEditState = true;

function App() {
  return (
    <div className="pt-[64px] px-[320px] pb-[183px] flex justify-center items-center bg-[#FFF]">
      <div className="px-[48px] pb-[48px] flex w-[1280px] flex-col items-center gap-[40px] shrink-0 rounded">
        <div className="w-full flex justify-center items-center self-stretch">
          <h1 className="text-[18px] font-semibold  text-[#262626]">
            Мои организации
          </h1>
        </div>
        <div className="w-full flex items-start  gap-7 self-stretch	">
          <div className="flex flex-col items-start gap-5 flex-[1_1_0%]">
            {containers.map((el) => {
              return <CorporationContainer key={el} />;
            })}
          </div>
          <div className="flex flex-col items-start gap-5 flex-[1_1_0%]">
            {containers.map((el) => {
              return <CorporationContainer key={el} />;
            })}
          </div>
        </div>
      </div>
      {/* {modalDeleteState && (
        <div>
          <Backdrop />
          <ModalDelete />
        </div>
      )} */}
      {modalEditState && (
        <div>
          <Backdrop />
          <ModalEdit />
        </div>
      )}
    </div>
  );
}

export default App;
