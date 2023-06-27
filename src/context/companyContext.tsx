import React, { useContext } from "react";
import { IChangeEl, ICompany, IOwnership } from "../types/types";

interface IContext {
  companies: ICompany[] | undefined;
  setCompanies: React.Dispatch<React.SetStateAction<ICompany[] | undefined>>;
  ownerships: IOwnership[] | undefined;
  setOwnerships: React.Dispatch<React.SetStateAction<IOwnership[] | undefined>>;
  elToDel: number | undefined;
  setElToDel: React.Dispatch<React.SetStateAction<number | undefined>>;
  elToEdit: ICompany | undefined;
  setElToEdit: React.Dispatch<React.SetStateAction<ICompany | undefined>>;
  changeElement: (changedData: IChangeEl) => void;
  modalDeleteState: boolean;
  setModalDeleteState: React.Dispatch<React.SetStateAction<boolean>>;
  modalEditState: boolean;
  setModalEditState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CompanyContext = React.createContext<IContext | null>({
  companies: [],
  setCompanies: () => {},
  ownerships: [],
  setOwnerships: () => {},
  elToDel: undefined,
  setElToDel: () => {},
  elToEdit: undefined,
  setElToEdit: () => {},
  changeElement: () => {},
  modalDeleteState: false,
  modalEditState: false,
  setModalDeleteState: () => {},
  setModalEditState: () => {},
});

export const useCompanyContextHook = () => useContext(CompanyContext);
