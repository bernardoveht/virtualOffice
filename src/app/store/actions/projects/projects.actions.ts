import { createAction, props } from '@ngrx/store';
import { Projects } from 'src/app/models/projects.model';

enum ProjectsType {
    getAllProjects = '[Projects] Get all projects',
    getAllProjectsSuccess = '[Projects] Get all projects Success',
    projectsError = '[Projects] Projects Error',
}

export const getAllProjects = createAction(
    ProjectsType.getAllProjects,
);
export const getAllProjectsSuccess = createAction(
    ProjectsType.getAllProjectsSuccess,
    props<{ projects:Projects[]}>()
);
export const projectsError = createAction(
    ProjectsType.projectsError, 
    props<{ payload: any }>()
);