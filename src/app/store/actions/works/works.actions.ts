import { createAction, props } from '@ngrx/store';
import { Works, WorksAllPaginator, WorksFilter } from 'src/app/models/works.model';


enum WorksType {
    getAllWorks = '[Works] Get all Works',
    getAllWorksSuccess = '[Works] Get all Works Success',
    getSearchWorks = '[Works] Get Search Works',
    getSearchWorksSuccess = '[Works] Get Search Works Success',
    worksError = '[Works] Works Error',
}
export const getAllWorks = createAction(
    WorksType.getAllWorks,
);
export const getAllWorksSuccess = createAction(
    WorksType.getAllWorksSuccess,
    props<{ works:Works[]}>()
);
export const getSearchWorks = createAction(
    WorksType.getSearchWorks,
    props<{ filter:WorksFilter}>()
);
export const getSearchWorksSuccess = createAction(
    WorksType.getSearchWorksSuccess,
    props<{ works:WorksAllPaginator}>()
);
export const worksError = createAction(
    WorksType.worksError, 
    props<{ payload: any }>()
);