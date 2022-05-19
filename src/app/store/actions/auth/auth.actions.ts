import { createAction, props } from '@ngrx/store';

enum AuthType {
    login = '[Auth] Login User',
    loginSuccess = '[Auth] Login User Success',
    loginError = '[Auth] Login User Error',
}

export const login = createAction(
    AuthType.loginError
);
export const loginError = createAction(
    AuthType.loginError, 
    props<{ payload: any }>()
);