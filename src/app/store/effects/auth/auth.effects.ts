import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
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
      exhaustMap(action =>
        this.authService.login(action.username,action.password).pipe(
          map(user => authActions.loginSuccess({ user })),
          catchError(error => of(authActions.loginError({ payload:error })))
        )
      )
    )
  );
 

}