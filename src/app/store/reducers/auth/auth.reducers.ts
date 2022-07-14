import { NgPlural } from '@angular/common';
import { Action, createReducer, on } from '@ngrx/store';
import { Organisms } from 'src/app/models/organisms';
import { User, UserAuth } from 'src/app/models/users.model';
import * as actions from '../../actions/index';
import jwt_decode,{JwtPayload} from "jwt-decode";


export interface AuthState {
  user: User | null;
  organisms:Organisms[];
  error: any;
  credentials:UserAuth | null;
  expirationToken: number | null;
}

export const authInitialState: AuthState = {
  user: null,
  organisms: [],
  error: null,
  credentials:null,
  expirationToken:null
};

const _authReducer = createReducer(
  authInitialState,
  on(actions.login, (state,{username,password}) => ({ 
    ...state,
    username,
    password
  })),
  on(actions.loginSuccess, (state, { user ,organisms,credentials}) => {
    const decoded:JwtPayload = jwt_decode(credentials.access_token);
    const expiration = decoded.exp ? decoded.exp: null ;
    return {
      ...state,
      user,
      organisms,
      credentials,
      expirationToken: expiration
    };
  }),
  on(actions.logout, (state) => ({
    ...state ,
    user: null,
    organisms: [],
    error: null,
    username:null,
    password:null,
    credentials:null,
    expirationToken:null
  })),
  on(actions.loginError, (state, { payload }) => ({
    ...state,
    error: payload,
  })),
);

export const authReducer = (state: AuthState | undefined, action: Action): AuthState => _authReducer(state, action);