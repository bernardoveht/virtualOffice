import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap} from 'rxjs/operators';
import { OrganismsFilter } from 'src/app/models/organisms';
import { OrganismsService } from 'src/app/services/api/organisms.service';
import { AuthService } from '../../../services/api/auth.service';
import * as authActions from '../../actions/index'

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private organismsService:OrganismsService
      ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      switchMap(actions => this.authService.login(actions.username,actions.password)),
      switchMap(userAuth => {
        return this.authService.userInfo(userAuth.access_token).pipe(
          map(user =>{
            return {
              user,
              userAuth
            }
          })
        )
      }),
      switchMap(result => {
        const filter:OrganismsFilter = { id:result.user.organismId};
          return this.organismsService.getOrganismsSearch(filter).pipe(
          map(org => authActions.loginSuccess({user:result.user,organisms:org,credentials:result.userAuth})),
          catchError(error => of(authActions.loginError({payload:error})))
          )
      }),
    )
  );
}