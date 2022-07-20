import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../../actions/index';
import { Agreements, AgreementsAllPaginator, AgreementsFilter } from '../../../models/agreements.model';
import { AgreementType, ProjectWorkflowTypes } from 'src/app/constants/enums/agreements.enum';


export interface AgreementsState {
  agreements: Agreements[];
  agreementsAll: Agreements[];
  agreementDetail: Agreements | null;
  error: any;
  filters: AgreementsFilter | null;
  details: any;
  totalCounts: number;
}

export const agreementsInitialState: AgreementsState = {
  agreements: [],
  agreementsAll: [],
  agreementDetail: null,
  error: null,
  filters: null,
  details: null,
  totalCounts: 0,
};

const _agreementsReducer = createReducer(
  agreementsInitialState,
  on(actions.getAllAgreements, (state) => ({
    ...state,
  })),
  on(actions.getAllAgreementsSuccess, (state, { agreementsAll, totalCount }) => ({
    ...state,
    agreementsAll: agreementsAll.map(item => ({
      ...item,
      state: checkState(item),
      type: checkType(item),
      sippeCode: checkSippe(item),
      name:checkName(item)
    })),
    totalCounts: totalCount
  })),
  on(actions.getSearchAgreements, (state, filter) => ({
    ...state,
    filters: filter.filters
  })),
  on(actions.getSearchAgreementsSuccess, (state, { agreements }) => ({
    ...state,
    agreements: agreements.map(item => ({
      ...item,
      state: checkState(item),
      type: checkType(item),
      sippeCode: checkSippe(item),
      name:checkName(item)
    })),
    agreementDetail: agreements[0],
  })),
  on(actions.getAgreementDetail, (state, filter) => ({
    ...state,
    filters: filter.filters
  })),
  on(actions.getAgreementDetailSuccess, (state, { agreement }) => ({
    ...state,
    agreementDetail: {
      ...agreement,
      state: checkState(agreement),
      type: checkType(agreement),
      sippeCode: checkSippe(agreement),
      name:checkName(agreement)
    },
  })),
  on(actions.agreementsError, (state, { payload }) => ({
    ...state,
    error: payload,
  })),
);

export const agreementsReducer = (state: AgreementsState | undefined, action: Action): AgreementsState => _agreementsReducer(state, action);


const checkState = (agreement: Agreements): string => {
  let response = '-';
  if (agreement && agreement.workflowType) {
    if (agreement.workflowType === 1) {
      if (agreement.subStep > 1 && agreement.subStep < 12) {
        response = ProjectWorkflowTypes.Gestion;
      }
      if (agreement.subStep === 12) {
        response = ProjectWorkflowTypes.Organismo;
      }
      if (agreement.subStep === 14) {
        response = ProjectWorkflowTypes.Mop;
      }
    }
    if (agreement.workflowType === 2) {
      if (agreement.subStep > 7 && agreement.subStep < 20) {
        response = ProjectWorkflowTypes.Gestion;
      }
      if (agreement.subStep === 20) {
        response = ProjectWorkflowTypes.Organismo;
      }
      if (agreement.subStep === 21) {
        response = ProjectWorkflowTypes.Mop;
      }
    }
    if (agreement.workflowType === 5) {
      if (agreement.subStep > 1 && agreement.subStep < 17) {
        response = ProjectWorkflowTypes.Gestion;
      }
      if (agreement.subStep === 17) {
        response = ProjectWorkflowTypes.Organismo;
      }
      if (agreement.subStep === 18) {
        response = ProjectWorkflowTypes.Mop;
      }
    }
    if (agreement.subStep === 255) {
      response = ProjectWorkflowTypes.Protocolizado;
    }
    if (!response) {
      response = ProjectWorkflowTypes.Gestion;
    }
  }
  return response;
}
const checkType = (agreement: Agreements): string => {
  let response = '';
  if (agreement.agreementType === 1) {
    response = AgreementType.Marco
  }
  if (agreement.agreementType === 2) {
    if (agreement.category.id === 62 || agreement.category.id === 63) {
      response = AgreementType.Financiamiento
    } else {
      response = AgreementType.Especifico
    }
  }
  return response;
}

const checkSippe = (agreement: Agreements): string => {
  let response = '';
  if(agreement.projects.length){
    response = agreement.projects[0].projectId;
  }
  return response;
}

const checkName = (agreement: Agreements): string => {
  let response = agreement.category.name;
  if (agreement.agreementType === 1) {
    response = 'Convenio Marco ' + agreement.category.name;
  }
  return response;
}

