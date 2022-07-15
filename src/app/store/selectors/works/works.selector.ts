import { createFeatureSelector, createSelector } from '@ngrx/store';
import {WorksState} from '../../reducers/works/works.reducers';

const WORKS ='works';

export const getWorksState = createFeatureSelector<WorksState>(WORKS);

export const getWorks = createSelector(getWorksState,(state) => state.works);
export const getWorksDataResume = createSelector(getWorksState, (state) => {

    let totalCost = 0 ;   
    
    const totalCount = state.workPaginator?.totalCount;


    state.workPaginator?.result.forEach(element=>{
        totalCost += element.updatedAmount;
    });


    

    return {
        totalCost,
        totalWorks:totalCount
    }
});
