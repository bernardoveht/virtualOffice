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
  getAgreementsSearch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(agreementsActions.getSearchAgreements),
      concatMap(actions => {
        return this.agreementsService.getAgreementsSearch(actions.filters).pipe(
          map(results => {
            return agreementsActions.getSearchAgreementsSuccess({ agreements: results.result })
          }
          ),
          catchError(error =>
            of(agreementsActions.agreementsError({ payload: error }))
          )
        );
      })
    )
  );
  getDetailsAgreement$ = createEffect(() =>
  this.actions$.pipe(
    ofType(agreementsActions.getAgreementDetail),
    concatMap(actions => {
      return this.agreementsService.getAgreementsSearch(actions.filters).pipe(
        map(results => {
          return agreementsActions.getAgreementDetailSuccess({ agreement: results.result[0] })
        }
        ),
        catchError(error =>
          of(agreementsActions.agreementsError({ payload: error }))
        )
      );
    })
  )
);

}
