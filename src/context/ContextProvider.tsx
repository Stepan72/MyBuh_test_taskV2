import React, { useContext, useState } from "react";
import { CompanyContext } from "./companyContext";
import { ICompany, IOwnership, IChangeEl } from "../types/types";

function ContextProvider({ children }: { children: React.ReactNode }) {
  /// Стейты основных данных
  const [companies, setCompanies] = useState<ICompany[] | undefined>(undefined);
  const [ownerships, setOwnerships] = useState<IOwnership[] | undefined>(
    undefined
  );
  //// Стейты элементов к удалению и изменению
  const [elToDel, setElToDel] = useState<number | undefined>(undefined);
  const [elToEdit, setElToEdit] = useState<ICompany | undefined>(undefined);
  //// Стейты модалок
  const [modalDeleteState, setModalDeleteState] = useState<boolean>(false);
  const [modalEditState, setModalEditState] = useState<boolean>(false);

  /// Хендлер изменения элемента
  function changeElement(changedData: IChangeEl) {
    // console.log(changedData);
    const elToShange = companies!.find((el) => {
      return el.company_id === changedData.id;
    });
    // console.log(elToShange);
    let newElement = {
      ...(elToShange as ICompany),
      company_name: changedData.name,
      company_tin: changedData.inn,
      ownership_id: changedData.ownId,
    };
    // console.log(newElement);
    const companiesWithoutElToChange = companies!.filter((el) => {
      return el.company_id !== changedData.id;
    });
    // console.log(companiesWithoutElToChange);
    const companiesWithChangedEl = [...companiesWithoutElToChange, newElement];
    console.log(companiesWithChangedEl);
    setCompanies((prevValue) => {
      return companiesWithChangedEl;
    });
    setModalEditState(false);
  }

  const stateContext = {
    companies,
    setCompanies,
    ownerships,
    setOwnerships,
    elToDel,
    setElToDel,
    elToEdit,
    setElToEdit,
    changeElement,
    modalDeleteState,
    setModalDeleteState,
    modalEditState,
    setModalEditState,
  };

  return (
    <CompanyContext.Provider value={stateContext}>
      {children}
    </CompanyContext.Provider>
  );
}

export default ContextProvider;
