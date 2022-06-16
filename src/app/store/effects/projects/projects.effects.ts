import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map,exhaustMap, switchMap, concatMap, mergeMap} from 'rxjs/operators';
import { ProjectAllPaginator, ProjectsFilter } from 'src/app/models/projects.model';
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
  getProjectsSearch$ = createEffect(() =>
    this.actions$.pipe(
        ofType(projectsActions.getSearchProjects),
        concatMap( actions => {
          return this.projectsService.getProjectsSearch(actions.filters).pipe(            
            mergeMap((paginators) => {
              return this.projectsService.getProjectsSearchAll(actions.filters).pipe(
                map((all) => ({ ...paginators,projectsAll:all}))
              );
            }),
            map(results =>
              projectsActions.getSearchProjectsSuccess({projects:results,projectAll:results.projectsAll})
            ),
            catchError(error =>
              of(projectsActions.projectsError({ payload:error}))
            )
          );
        })
    )
  );
  
}
