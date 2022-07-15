import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WorkSteps } from 'src/app/constants/enums/work.enum';
import {WorksState} from '../../reducers/works/works.reducers';

const WORKS ='works';

export const getWorksState = createFeatureSelector<WorksState>(WORKS);

export const getWorks = createSelector(getWorksState,(state) => state.works);
export const getWorksDataResume = createSelector(getWorksState, (state) => {

    let totalCost = 0 ;
    let levels:number[]=[0,0,0];
    
    const totalCount = state.workPaginator?.totalCount;


    state.workPaginator?.result.forEach(element=>{

        const steps = element.step;
        switch(steps) {
            case 3:
                levels[0]++;
                break;
            case 1:
                levels[1]++;
                break;
            case WorkSteps.Finalizada:
                levels[2]++;
                break;    
        } 

        totalCost += element.updatedAmount;


    });


    

    return {
        levels,
        totalCost,
        totalWorks:totalCount
    }
});
