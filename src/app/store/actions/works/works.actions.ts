import { createAction, props } from '@ngrx/store';
import { Works } from 'src/app/models/works.model';


enum WorksType {
    getAllWorks = '[Works] Get all Works',
    getAllWorksSuccess = '[Works] Get all Works Success',
    worksError = '[Works] Works Error',
}
export const getAllWorks = createAction(
    WorksType.getAllWorks,
);
export const getAllWorksSuccess = createAction(
    WorksType.getAllWorksSuccess,
    props<{ works:Works[]}>()
);
export const worksError = createAction(
    WorksType.worksError, 
    props<{ payload: any }>()
);