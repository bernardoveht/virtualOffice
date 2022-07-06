import { createAction, props } from '@ngrx/store';
import { ProjectAllPaginator, ProjectDetails, Projects, ProjectsFilter } from 'src/app/models/projects.model';

enum ProjectsType {
    getAllProjects = '[Projects] Get all projects',
    getAllProjectsSuccess = '[Projects] Get all projects Success',
    getSearchProjects='[Projects] Get search by filter projects',
    getSearchProjectsSuccess='[Projects] Get search by filter projects Success',
    projectsPageChange = '[Projects] Get new currentPage',
    getDetailsProjects ='[Projects] Get deails projects',
    getDetailsProjectsSuccess ='[Projects] Get deails projects Success',
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
    props<{ projects:ProjectAllPaginator;projectAll:ProjectAllPaginator}>()
);
export const getDetailsProjects = createAction(
    ProjectsType.getDetailsProjects,
    props<{ ids:ProjectDetails}>()
);
export const getDetailsProjectsSuccess = createAction(
    ProjectsType.getDetailsProjectsSuccess,
    props<{ details:any}>()
);

export const projectsError = createAction(
    ProjectsType.projectsError, 
    props<{ payload: any }>()
);

