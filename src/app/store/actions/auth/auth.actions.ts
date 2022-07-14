import { createAction, props } from '@ngrx/store';
import { Organisms } from 'src/app/models/organisms';
import { User, UserAuth } from 'src/app/models/users.model';

enum AuthType {
    login = '[Auth] Login User',
    loginSuccess = '[Auth] Login User Success',
    logout = '[Auth] Logout',
    loginError = '[Auth] Login User Error',
}

export const login = createAction(
    AuthType.login,
    props<{ username: string;password:string}>()
);
export const loginSuccess = createAction(
    AuthType.loginSuccess,
    props<{ user:User,organisms:Organisms[],credentials:UserAuth}>()
);
export const logout = createAction(
    AuthType.logout,
);
export const loginError = createAction(
    AuthType.loginError, 
    props<{ payload: any }>()
);