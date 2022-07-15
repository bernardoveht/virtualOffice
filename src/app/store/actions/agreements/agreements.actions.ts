import { createAction, props } from '@ngrx/store';
import { Agreements, AgreementsAllPaginator, AgreementsFilter } from 'src/app/models/agreements.model';

enum AgreementsType {
    getAllAgreements = '[Agreements] Get all agreements',
    getAllAgreementsSuccess = '[Agreements] Get all agreements Success',
    getSearchAgreements='[Agreements] Get search by filter agreements',
    getSearchAgreementsSuccess='[Agreements] Get search by filter agreements Success',
    agreementsPageChange = '[Agreements] Get new currentPage',
    getDetailsAgreements ='[Agreements] Get deails agreements',
    getDetailsAgreementsSuccess ='[Agreements] Get deails agreements Success',
    agreementsError = '[Agreements] Agreements Error',
}

export const getAllAgreements = createAction(
    AgreementsType.getAllAgreements,
    props<{ filters:AgreementsFilter}>()
);
export const getAllAgreementsSuccess = createAction(
    AgreementsType.getAllAgreementsSuccess,
    props<{ agreementsAll:Agreements[],totalCount:number;}>()
);
export const getSearchAgreements = createAction(
    AgreementsType.getSearchAgreements,
    props<{ filters:AgreementsFilter}>()
);
export const getSearchAgreementsSuccess = createAction(
    AgreementsType.getSearchAgreementsSuccess,
    props<{ agreements:Agreements[];}>()
);
export const agreementsError = createAction(
    AgreementsType.agreementsError, 
    props<{ payload: any }>()
);

