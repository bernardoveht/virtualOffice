import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as projectReducer from '../../reducers/projects/projects.reducers';

export const getProjectState = createFeatureSelector<projectReducer.ProjectsState>('projects');

export const getPojects = createSelector(getProjectState,(state:projectReducer.ProjectsState) => state.projects);
export const getProjectDataResume = createSelector(getProjectState, (state: projectReducer.ProjectsState) => {
    let levels:number[]=[0,0,0,0,0,0,0];
    let totalAmount = 0 ;

    state.projects.forEach(element=>{
        levels[element.workflowStepStatus] ++;
        totalAmount += element.totalCost;
    });

    const totalProject = state.projects.length; 
    const result = {
        totalAmount,
        totalProject,
        levels
    }
    return result;
});
