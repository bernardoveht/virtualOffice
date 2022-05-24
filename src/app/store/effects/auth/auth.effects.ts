import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, take,} from 'rxjs/operators';
import { UserAuth } from 'src/app/models/users.model';
import { AuthService } from '../../../services/api/auth.service';
import * as authActions from '../../actions/index'

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService
      ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      switchMap(actions => this.authService.login(actions.username,actions.password)),
      switchMap(result => {
          return this.authService.userInfo(result.access_token).pipe(
            map(user => authActions.loginSuccess({user})),
            catchError(error => of(authActions.loginError({payload:error})))
          )
      })
    )
  );
 

}