import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectWorkflowTypes } from 'src/app/constants/enums/agreements.enum';
import * as agreementReducer from '../../reducers/agreements/agreements.reducers';

export const getAgreementState = createFeatureSelector<agreementReducer.AgreementsState>('agreements');

export const getAgreementsAll = createSelector(getAgreementState, (state: agreementReducer.AgreementsState) => state.agreementsAll);
export const getAgreementDataRenditions = createSelector(getAgreementState, (state: agreementReducer.AgreementsState) => {
    let levels: number[] = [0, 0, 0, 0];
    let totalAmount = 0;
    let totalProject = 0;
    let totalObserver = 0;
    state.agreementsAll.forEach(element => {
        const steps = element.state;
        switch (steps) {
            case ProjectWorkflowTypes.Gestion:
                levels[0]++;
                break;
            case ProjectWorkflowTypes.Mop:
                levels[1]++;
                break;
            case ProjectWorkflowTypes.Organismo:
                levels[2]++;
                break;
            case ProjectWorkflowTypes.Protocolizado:
                levels[3]++;
                break;
        }
    });
    const result = {
        levels
    }
    return result;
});