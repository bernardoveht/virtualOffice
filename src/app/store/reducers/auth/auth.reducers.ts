import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/models/users.model';
import * as actions from '../../actions/index';


export interface AuthState {
  user: User | null;
  error: any;
}

export const initialState: AuthState = {
  user: null,
  error: null,
};

const _authReducer = createReducer(
  initialState,
  on(actions.login, (state,{username,password}) => ({ 
    ...state,
    username,
    password
  })),
  on(actions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
  })),
  on(actions.loginError, (state, { payload }) => ({
    ...state,
    error: payload,
  })),
);

export const authReducer = (state: AuthState | undefined, action: Action): AuthState => _authReducer(state, action);