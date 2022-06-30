import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectWorkflowStatuses, ProjectWorkflowSteps } from 'src/app/constants/emuns/project.enums';
import * as projectReducer from '../../reducers/projects/projects.reducers';

export const getProjectState = createFeatureSelector<projectReducer.ProjectsState>('projects');

export const getPojects = createSelector(getProjectState,(state:projectReducer.ProjectsState) => state.projects);
export const getProjectDataResume = createSelector(getProjectState, (state: projectReducer.ProjectsState) => {
    let levels:number[]=[0,0,0,0];
    let totalAmount = 0 ;   
    let totalProject = 0;
    let totalObserver = 0;
    
    state.projects.forEach(element=>{
        const steps = element.workflowStep;
        switch(steps) {
            case ProjectWorkflowSteps.Aprobado:
                levels[3]++;
                break;
            case ProjectWorkflowSteps.Borrador:
                levels[0]++;
                break;
            default: // En gestion
                levels[2]++;
                break;    
        }   
        if(element.workflowStepStatus === ProjectWorkflowStatuses.Observado){
            levels[1]++;           
        }
        
        totalAmount += element.totalCost;    
    });

    totalObserver = levels[1];
    totalProject = state.projects.length;

    const result = {
        totalAmount,
        totalProject,
        levels,
        totalObserver
    }
    return result;
});
