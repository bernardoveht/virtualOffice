import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map,exhaustMap} from 'rxjs/operators';
import { ProjectsService } from 'src/app/services/api/projects.service';
import * as projectsActions from '../../actions/index'

@Injectable()
export class ProjectsEffects {

    constructor(
        private actions$: Actions,
        private projectsService: ProjectsService
      ) {}

  getProjectsAll$ = createEffect(() =>
    this.actions$.pipe(
        ofType(projectsActions.getAllProjects),
        exhaustMap(() => 
        this.projectsService.getProjectsAll().pipe(
            map(projects => projectsActions.getAllProjectsSuccess({projects})),
            catchError(error => of(projectsActions.projectsError({payload:error})))   
            )
        )   
    )
  );

  
}
