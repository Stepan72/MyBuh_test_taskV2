import React, { useEffect, useState } from "react";

import "./App.css";
import CorporationContainer from "./components/CorporationContainer";
import ModalDelete from "./components/ModalDelete";
import Backdrop from "./components/BackDrop";
import ModalEdit from "./components/ModalEdit";
import ModalEditComplex from "./components/ModalEditComplex";
import { ICompany } from "./types/types";
const containers = [1, 2, 3, 4];
const modalEditState = true;

function App() {
  const [companies, setCompanies] = useState<ICompany[] | null>(null);
  const [modalDeleteState, setModalDeleteState] = useState<{
    state: true | false;
    stateElToDel?: number;
  }>({ state: false });

  //// Получение данных по компаниям
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        "https://raw.githubusercontent.com/arkdich/mybuh-frontend-test/main/companies.json"
      );
      let data = await response.json();
      console.log(data);
      setCompanies(data);
    }

    fetchData();
  }, []);

  ///// Хендлеры удаления или отмены удаления
  function deleteIconHandler(delEl: number) {
    setModalDeleteState({ state: true, stateElToDel: delEl });
  }
  function deleteStateCancel() {
    setModalDeleteState({ state: false, stateElToDel: undefined });
  }
  function deleteStateConfirm() {
    setCompanies((prevValue) => {
      return prevValue!.filter((el) => {
        return el.company_id !== modalDeleteState.stateElToDel;
      });
    });
    setModalDeleteState({ state: false, stateElToDel: undefined });
  }

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
            {companies?.slice(0, 4).map((el: ICompany) => {
              return (
                <CorporationContainer
                  key={el.company_id}
                  {...el}
                  onDelete={deleteIconHandler}
                />
              );
            })}
          </div>
          <div className="flex flex-col items-start gap-5 flex-[1_1_0%]">
            {companies?.slice(4).map((el) => {
              return (
                <CorporationContainer
                  key={el.company_id}
                  {...el}
                  onDelete={deleteIconHandler}
                />
              );
            })}
          </div>
        </div>
      </div>
      {modalDeleteState.state && (
        <div>
          <Backdrop onCancel={deleteStateCancel} />
          <ModalDelete
            onDelete={deleteStateConfirm}
            onCancel={deleteStateCancel}
          />
        </div>
      )}
      {/* {modalEditState && (
        <div>
          <Backdrop />
          <ModalEditComplex />
        </div>
      )} */}
    </div>
  );
}

export default App;
