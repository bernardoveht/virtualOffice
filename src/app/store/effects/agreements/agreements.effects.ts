import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, exhaustMap, concatMap, mergeMap } from 'rxjs/operators';
import * as agreementsActions from '../../actions/index'
import { AgreementsService } from '../../../services/api/agreements.service';

@Injectable()
export class AgreementsEffects {

  constructor(
    private actions$: Actions,
    private agreementsService: AgreementsService
  ) { }

  getAgreementsAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(agreementsActions.getAllAgreements),
      concatMap(actions => {
        let filters = JSON.parse(JSON.stringify(actions.filters));
        delete filters.pageSize;
        return this.agreementsService.getAgreementsSearch(filters).pipe(
          map(data => {
            return agreementsActions.getAllAgreementsSuccess({ agreementsAll: data.result, totalCount: data.totalCount })
          }
          ),
          catchError(error =>
            of(agreementsActions.projectsError({ payload: error }))
          )
        );
      })
    )
  );
  getProjectsSearch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(agreementsActions.getSearchAgreements),
      concatMap(actions => {
        return this.agreementsService.getAgreementsSearch(actions.filters).pipe(
          map(results => {
            return agreementsActions.getSearchAgreementsSuccess({ agreements: results.result })
          }
          ),
          catchError(error =>
            of(agreementsActions.projectsError({ payload: error }))
          )
        );
      })
    )
  );
  /*getDetailsProjects$ = createEffect(() =>
  this.actions$.pipe(
      ofType(projectsActions.getDetailsProjects),
      switchMap((actions) => 
      this.projectsService.getDetailsSubGroup(actions.ids.workSubGroupId).pipe(
          map(details => projectsActions.getDetailsProjectsSuccess({details})),
          catchError(error => of(projectsActions.projectsError({payload:error})))   
          )
      )   
  )
);*/

}
