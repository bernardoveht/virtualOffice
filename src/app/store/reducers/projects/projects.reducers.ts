import { Action, createReducer, on } from '@ngrx/store';
import { ProjectAllPaginator, Projects, ProjectsFilter } from 'src/app/models/projects.model';
import * as actions from '../../actions/index';


export interface ProjectsState {
  projects: Projects[];
  projectPaginator: ProjectAllPaginator | null
  error: any;
  filters:ProjectsFilter | null;
}

export const projectsInitialState: ProjectsState = {
  projects: [],
  error: null,
  projectPaginator:null,
  filters:null
};

const _projectsReducer = createReducer(
  projectsInitialState,
  on(actions.getAllProjects, (state) => ({ 
    ...state,
  })),
  on(actions.getAllProjectsSuccess, (state, { projects }) => ({
    ...state,
    projects,
  })),
  on(actions.getSearchProjects, (state,filter) => ({ 
    ...state,
    filters:filter.filters
  })),
  on(actions.getSearchProjectsSuccess, (state, { projects,projectAll }) => ({
    ...state,
    projectPaginator:projects,
    projects:projectAll.result
  })),
  on(actions.projectsError, (state, { payload }) => ({
    ...state,
    error: payload,
  })),
);

export const projectsReducer = (state: ProjectsState | undefined, action: Action): ProjectsState => _projectsReducer(state, action);