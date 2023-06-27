import React, { useEffect, useState } from "react";

import "./App.css";
import CorporationContainer from "./components/CorporationContainer";
import ModalDelete from "./components/ModalDelete";
import Backdrop from "./components/BackDrop";
import ModalEdit from "./components/ModalEdit";
import { ICompany, ICompanyFull, IOwnership } from "./types/types";

import { useCompanyContextHook } from "./context/companyContext";

function App() {
  const ctx = useCompanyContextHook();

  /// Cтейты модалок
  const [modalDeleteState, setModalDeleteState] = useState<boolean>(false);
  const [modalEditState, setModalEditState] = useState<boolean>(false);

  //// Получение данных по компаниям
  useEffect(() => {
    async function fetchData() {
      let responseCompanies = await fetch(
        "https://raw.githubusercontent.com/arkdich/mybuh-frontend-test/main/companies.json"
      );
      let dataCompanies = await responseCompanies.json();
      // console.log(dataCompanies);
      ctx?.setCompanies(dataCompanies);

      let responseOwnership = await fetch(
        "https://raw.githubusercontent.com/arkdich/mybuh-frontend-test/main/ownerships.json"
      );
      let dataOwnership = await responseOwnership.json();
      // console.log(dataOwnership);
      ctx?.setOwnerships(dataOwnership);
    }

    fetchData();
  }, []);
  //// Хендлер редактирования
  function editIconHandler(editElNum: number) {
    let companyElIndex = ctx!.companies?.findIndex((el) => {
      return el.company_id === editElNum;
    });
    let companyToEdit = ctx!.companies![companyElIndex!];

    setModalEditState(true);
    ctx?.setElToEdit(companyToEdit);
  }

  ///// Хендлеры удаления или отмены удаления
  function deleteIconHandler(delEl: number) {
    setModalDeleteState(true);
    ctx?.setElToDel(delEl);
    console.log(delEl);
  }
  function deleteStateCancel() {
    setModalDeleteState(false);
    ctx?.setElToDel(undefined);
    setModalEditState(false);
    ctx?.setElToEdit(undefined);
  }
  function deleteStateConfirm() {
    ctx!.setCompanies((prevValue) => {
      return prevValue!.filter((el) => {
        return el.company_id !== ctx?.elToDel;
      });
    });
    setModalDeleteState(false);
    ctx?.setElToDel(undefined);
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
            {ctx?.companies?.slice(0, 4).map((el: ICompany) => {
              return (
                <CorporationContainer
                  key={el.company_id}
                  {...el}
                  onDelete={deleteIconHandler}
                  onEdit={editIconHandler}
                />
              );
            })}
          </div>
          <div className="flex flex-col items-start gap-5 flex-[1_1_0%]">
            {ctx?.companies?.slice(4).map((el) => {
              return (
                <CorporationContainer
                  key={el.company_id}
                  {...el}
                  onDelete={deleteIconHandler}
                  onEdit={editIconHandler}
                />
              );
            })}
          </div>
        </div>
      </div>
      {modalDeleteState && (
        <div>
          <Backdrop onCancel={deleteStateCancel} />
          <ModalDelete
            onDelete={deleteStateConfirm}
            onCancel={deleteStateCancel}
          />
        </div>
      )}
      {modalEditState && (
        <div>
          <Backdrop onCancel={deleteStateCancel} />
          <ModalEdit onCancel={deleteStateCancel} />
        </div>
      )}
    </div>
  );
}

export default App;
