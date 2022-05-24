import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export interface AppState {
  auth: reducers.AuthState;
//   salesStructure: reducers.SalesStructureState;
}

export const appReducers: ActionReducerMap<AppState> = {
auth: reducers.authReducer
//   salesStructure:reducers.salesStructureReducer
};