import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { getToken } from 'src/app/store/selectors/auth/auth.selector';
import { Router } from '@angular/router';
import * as authActions from'src/app/store/actions/auth/auth.actions';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(getToken).pipe(
      take(1),
      exhaustMap((auth)  => {
          let token = '';
        if (!auth.toke) {          
          return next.handle(request);
        }
        token = auth.toke;
        if(auth.expiration) {
          this.store.dispatch(authActions.logout());
          this.router.navigate(['']);
          return next.handle(request);          
        } else { 
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
              'x-api-key':'abcdefg',
            },
          });
          return next.handle(request);
         }       
      })
    )
  }
}
