export interface ICompany {
  company_id: number;
  company_name: string;
  company_tin: string;
  logo: string | null;
  ownership_id: number;
  onDelete: (delEl: number | undefined) => void;
  onEdit: (editEl: number | undefined) => void;
}

export interface IOwnership {
  id: number;
  code: string;
  full: string;
  short: string;
  parent_id: number;
  account_type: string;
}

export interface ICompanyFull extends ICompany, IOwnership {}

export interface IEdit {
  onCancel: () => void;
}

export interface IChangeEl {
  name: string;
  inn: string;
  ownId: number;
  id: number;
}
