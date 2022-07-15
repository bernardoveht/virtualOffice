export interface Agreements {
  id: number;
  state:string;
  type:string;
  provinceId: string;
  municipalityId: string;
  agreementStatus: number;
  agreementType: number;
  category: AgreementsCategory;
  actDate?: any;
  organismId: string;
  governmentLevel: number;
  step: number;
  subStep: number;
  workflowType: number;
  territorialUnitType: number;
  frameworkAgreementId?: any;
  htmlContent?: any;
  tracking?: any;
  frameworkAgreement?: any;
  signs: any[];
}

export interface AgreementsCategory {
  id: number;
  name: string;
}

export interface AgreementsFilter {
  page?: number;
  pageSize?: number;
  orderBy?: string;
  orderDescending?: boolean;
  id?: string;
  provinces?: any[];
  departments?: any[];
  municipalities?: any[];
  beneficiaryOrganismId?: string;
}

export interface AgreementsAllPaginator{
  result:Agreements[];
  totalCount:number;
}

