import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/users.model';

enum AuthType {
    login = '[Auth] Login User',
    loginSuccess = '[Auth] Login User Success',
    loginError = '[Auth] Login User Error',
}

export const login = createAction(
    AuthType.loginError,
    props<{ username: string;password:string}>()
);
export const loginSuccess = createAction(
    AuthType.loginSuccess,
    props<{ user:User}>()
);
export const loginError = createAction(
    AuthType.loginError, 
    props<{ payload: any }>()
);