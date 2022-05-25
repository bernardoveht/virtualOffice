import { Action, createReducer, on } from '@ngrx/store';
import { Projects } from 'src/app/models/projects.model';
import * as actions from '../../actions/index';


export interface ProjectsState {
  projects: Projects[];
  error: any;
}

export const projectsInitialState: ProjectsState = {
  projects: [],
  error: null,
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
  on(actions.projectsError, (state, { payload }) => ({
    ...state,
    error: payload,
  })),
);

export const projectsReducer = (state: ProjectsState | undefined, action: Action): ProjectsState => _projectsReducer(state, action);