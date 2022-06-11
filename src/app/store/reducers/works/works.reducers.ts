import { Action, createReducer, on } from '@ngrx/store';
import { Works } from "src/app/models/works.model";
import * as actions from '../../actions/index';


export interface WorksState {
    works: Works[];
    error: any;
  }
  
  export const worksInitialState: WorksState = {
    works: [],
    error: null,
  };
  
  const _worksReducer = createReducer(
    worksInitialState,
    on(actions.getAllWorks, (state) => ({ 
      ...state,
    })),
    on(actions.getAllWorksSuccess, (state, { works }) => ({
      ...state,
      works,
    })),
    on(actions.projectsError, (state, { payload }) => ({
      ...state,
      error: payload,
    })),
  );
  
  export const worksReducer = (state: WorksState | undefined, action: Action): WorksState => _worksReducer(state, action);