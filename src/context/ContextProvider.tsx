import React, { useContext, useState } from "react";
import { CompanyContext } from "./companyContext";
import { ICompany, IOwnership } from "../types/types";

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [companies, setCompanies] = useState<ICompany[] | undefined>(undefined);
  const [ownerships, setOwnerships] = useState<IOwnership[] | undefined>(
    undefined
  );
  const [elToDel, setElToDel] = useState<number | undefined>(undefined);
  const [elToEdit, setElToEdit] = useState<ICompany | undefined>(undefined);

  const stateContext = {
    companies,
    setCompanies,
    ownerships,
    setOwnerships,
    elToDel,
    setElToDel,
    elToEdit,
    setElToEdit,
  };

  return (
    <CompanyContext.Provider value={stateContext}>
      {children}
    </CompanyContext.Provider>
  );
}

export default ContextProvider;
