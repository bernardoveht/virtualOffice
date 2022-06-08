import { Action, createReducer, on } from '@ngrx/store';
import { Projects } from 'src/app/models/projects.model';
import * as actions from '../../actions/index';


export interface ProjectsState {
  projects: Projects[];
  error: any;
  currentPage:number,
}

export const projectsInitialState: ProjectsState = {
  projects: [],
  error: null,
  currentPage:1,
};

const _projectsReducer = createReducer(
  projectsInitialState,
  on(actions.getAllProjects, (state) => ({ 
    ...state,
  })),
  on(actions.getAllProjectsSuccess, (state, { projects }) => ({
    ...state,
    projects,
    currentPage:1
  })),
  on(actions.getSearchProjects, (state,filter) => ({ 
    ...state,
    filter
  })),
  on(actions.getSearchProjectsSuccess, (state, { projects }) => ({
    ...state,
    projects:projects.result,
    currentPage:1
  })),
  on(actions.projectsPageChange, (state, { page }) => ({
    ...state,
    currentPage:page
  })),
  on(actions.projectsError, (state, { payload }) => ({
    ...state,
    error: payload,
  })),
);

export const projectsReducer = (state: ProjectsState | undefined, action: Action): ProjectsState => _projectsReducer(state, action);