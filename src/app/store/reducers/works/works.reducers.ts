import { Action, createReducer, on } from '@ngrx/store';
import { Works, WorksAllPaginator, WorksFilter } from "src/app/models/works.model";
import * as actions from '../../actions/index';


export interface WorksState {
    works: Works[];
    error: any;
    filters: WorksFilter | null;
    workPaginator: WorksAllPaginator | null;
  }
  
  export const worksInitialState: WorksState = {
    works: [],
    error: null,
    filters: null,
    workPaginator:null
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
    on(actions.getSearchWorks, (state,{filter}) => ({ 
      ...state,
      filters:filter
    })),
    on(actions.getSearchWorksSuccess, (state, { works }) => ({
      ...state,
      workPaginator:works
    })),
    on(actions.projectsError, (state, { payload }) => ({
      ...state,
      error: payload,
    })),
  );
  
  export const worksReducer = (state: WorksState | undefined, action: Action): WorksState => _worksReducer(state, action);