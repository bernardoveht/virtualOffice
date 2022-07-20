import { AgreementType, ProjectWorkflowTypes } from "../constants/enums/agreements.enum";

export interface Agreements {
  name:string;
  sippeCode:string;
  id: number;
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
  tracking: Tracking;
  frameworkAgreement?: any;
  signs: any[];
  projects: any[];
  type:string;
  state:string;

}

export interface AgreementsCategory {
  id: number;
  name: string;
}

interface Tracking {
  id: number;
  provinceId: string;
  municipalityId: string;
  type: number;
  gdeRecordNumber: string;
  gedoAgreementNumber?: any;
  documents: any[];
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

export const StateSelect = [
  ProjectWorkflowTypes.Gestion,
  ProjectWorkflowTypes.Mop,
  ProjectWorkflowTypes.Organismo,
  ProjectWorkflowTypes.Protocolizado
]

export const TypeSelect = [
  AgreementType.Especifico,
  AgreementType.Financiamiento,
  AgreementType.Marco,
]
