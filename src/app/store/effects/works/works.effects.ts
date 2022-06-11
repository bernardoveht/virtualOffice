import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map,exhaustMap} from 'rxjs/operators';
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

  
}
