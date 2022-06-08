import { createAction, props } from '@ngrx/store';
import { Projects, ProjectsFilter } from 'src/app/models/projects.model';

enum ProjectsType {
    getAllProjects = '[Projects] Get all projects',
    getAllProjectsSuccess = '[Projects] Get all projects Success',
    getSearchProjects='[Projects] Get search by filter projects',
    getSearchProjectsSuccess='[Projects] Get search by filter projects Success',
    projectsPageChange = '[Projects] Get new currentPage',
    projectsError = '[Projects] Projects Error',
}

export const getAllProjects = createAction(
    ProjectsType.getAllProjects,
);
export const getAllProjectsSuccess = createAction(
    ProjectsType.getAllProjectsSuccess,
    props<{ projects:Projects[]}>()
);
export const getSearchProjects = createAction(
    ProjectsType.getSearchProjects,
    props<{ filters:ProjectsFilter}>()
);
export const getSearchProjectsSuccess = createAction(
    ProjectsType.getSearchProjectsSuccess,
    props<{ projects:any}>()
);

export const projectsPageChange = createAction(
    ProjectsType.projectsError, 
    props<{ page: number }>()
);

export const projectsError = createAction(
    ProjectsType.projectsError, 
    props<{ payload: any }>()
);

