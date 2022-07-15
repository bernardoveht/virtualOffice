import { Action, createReducer, on } from '@ngrx/store';
import { WorkSteps } from 'src/app/constants/enums/work.enum';
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
    on(actions.getSearchWorksSuccess, (state, { works }) => {
        const totalCount = works.totalCount;
        const result = works.result.filter(x=> x.step != WorkSteps.Rescindida);

      return {
        ...state,
        workPaginator:{
          result,
          totalCount
        }    
      }; 
    }),
    on(actions.projectsError, (state, { payload }) => ({
      ...state,
      error: payload,
    })),
  );
  
  export const worksReducer = (state: WorksState | undefined, action: Action): WorksState => _worksReducer(state, action);