import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../../actions/index';


export interface AuthState {
  user: any;
  error: any;
}

export const initialState: AuthState = {
  user: null,
  error: null,
};

const _authReducer = createReducer(
  initialState,
  on(actions.login, (state) => ({ ...state })),
);

export const authReducer = (state: AuthState | undefined, action: Action): AuthState => _authReducer(state, action);