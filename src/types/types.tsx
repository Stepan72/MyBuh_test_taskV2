export interface ICompany {
  company_id: number;
  company_name: string;
  company_tin: string;
  logo: string | null;
  ownership_id: number;
  onDelete: (delEl: number) => void;
}
