import { createAction, props } from '@ngrx/store';
import { Organisms } from 'src/app/models/organisms';
import { User } from 'src/app/models/users.model';

enum AuthType {
    login = '[Auth] Login User',
    loginSuccess = '[Auth] Login User Success',
    loginError = '[Auth] Login User Error',
}

export const login = createAction(
    AuthType.login,
    props<{ username: string;password:string}>()
);
export const loginSuccess = createAction(
    AuthType.loginSuccess,
    props<{ user:User,organisms:Organisms[]}>()
);
export const loginError = createAction(
    AuthType.loginError, 
    props<{ payload: any }>()
);