import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as worksReducer from '../../reducers/works/works.reducers';

export const getWorksState = createFeatureSelector<worksReducer.WorksState>('works');

export const getWorks = createSelector(getWorksState,(state:worksReducer.WorksState) => state.works);
export const getWorksDataResume = createSelector(getWorksState, (state: worksReducer.WorksState) => {

    let totalCost = 0 ;   
    let updatedAmount = 0 ; 
    let totalWorks = 0 ;
   
    // state.works.forEach(element=>{
    //     totalCost += element.totalCost;
    //     updatedAmount +=element.updatedAmount;
    // });

    // const totalWorks = state.works.length; 
    
    const result = {
        totalCost,
        totalWorks,
        updatedAmount
    }
    return result;
});
