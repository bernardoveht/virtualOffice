import { Action, createReducer, on } from '@ngrx/store';
import { Organisms } from 'src/app/models/organisms';
import { User } from 'src/app/models/users.model';
import * as actions from '../../actions/index';


export interface AuthState {
  user: User | null;
  organisms:Organisms[];
  error: any;
}

export const authInitialState: AuthState = {
  user: null,
  organisms: [],
  error: null,
};

const _authReducer = createReducer(
  authInitialState,
  on(actions.login, (state,{username,password}) => ({ 
    ...state,
    username,
    password
  })),
  on(actions.loginSuccess, (state, { user ,organisms}) => ({
    ...state,
    user,
    organisms
  })),
  on(actions.loginError, (state, { payload }) => ({
    ...state,
    error: payload,
  })),
);

export const authReducer = (state: AuthState | undefined, action: Action): AuthState => _authReducer(state, action);