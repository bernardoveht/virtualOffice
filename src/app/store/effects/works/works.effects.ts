import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map,exhaustMap, switchMap, concatMap, mergeMap} from 'rxjs/operators';
import { FinancialAdvancesFilter } from 'src/app/models/works.model';
import { ProjectsService } from 'src/app/services/api/projects.service';
import { WorksService } from 'src/app/services/api/works.service';
import * as worksActions from '../../actions/index'

@Injectable()
export class WorksEffects {

    constructor(
        private actions$: Actions,
        private worksService: WorksService
      ) {}

  getWorksAll$ = createEffect(() =>
    this.actions$.pipe(
        ofType(worksActions.getAllWorks),
        exhaustMap(() => 
        this.worksService.getWorksAll().pipe(
            map(works => worksActions.getAllWorksSuccess({works})),
            catchError(error => of(worksActions.worksError({payload:error})))   
            )
        )   
    )
  );
  getWorksSearch$ = createEffect(() =>
  this.actions$.pipe(
      ofType(worksActions.getSearchWorks),
      exhaustMap((actions) => 
      this.worksService.getWorksSearch(actions.filter).pipe(
          map(works => worksActions.getSearchWorksSuccess({works})),
          catchError(error => of(worksActions.worksError({payload:error})))   
          )
      )   
  )
);
getWorkFinancialAdvances$ = createEffect(() =>
  this.actions$.pipe(
      ofType(worksActions.getCurrentWorks),
      concatMap(actions => {
        const {agreement} = actions.currentWork;
        const filters:FinancialAdvancesFilter = {
            page:0,
            pageSize:1000,
            workId:agreement.workId
        };
        return this.worksService.getFinancialAdvancesSearch(filters).pipe(
            mergeMap((advances) => {
                return this.worksService.getExpensesSearch(filters).pipe(
                    map((result)=>({...advances,expenses:result}))
                )
            }),
            map(results => worksActions.getCurrentWorksSuccess({payload:results})),
            catchError(error => of(worksActions.worksError({payload:error})))
        );
    }),
  )
);

  
}
