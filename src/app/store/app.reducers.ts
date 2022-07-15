import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  auth: reducers.AuthState;
  projects:reducers.ProjectsState;
  works:reducers.WorksState;
  agreements:reducers.AgreementsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: reducers.authReducer,
  projects:reducers.projectsReducer,
  works:reducers.worksReducer,
  agreements:reducers.agreementsReducer
};