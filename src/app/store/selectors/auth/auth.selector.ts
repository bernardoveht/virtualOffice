import { createFeatureSelector, createSelector } from '@ngrx/store';
import {AuthState} from '../../reducers/auth/auth.reducers';

const AUTH ='auth';

export const getUserState = createFeatureSelector<AuthState>(AUTH);
export const getUser = createSelector(getUserState,(state) => state.user);
export const getUserName = createSelector(getUserState, (state) => {
    let name = 'Admin';
    let organisms ='';
    if(state?.user?.firstName){
        name = state.user.firstName
        if(state?.user?.lastName){
            name = name + ' ' + state?.user?.lastName
        }
    }
    const org = state?.organisms[0]?.name;
    
    return {
        name,
        orgname:org
    }
});
export const isAuthenticated = createSelector(getUserState,(state) => {
 return state.user ? true : false;
});
export const getToken = createSelector(getUserState,(state)=>{
    let expiration = true;
    if(state.expirationToken){
        expiration = (Math.floor((new Date).getTime() / 1000)) >= state.expirationToken;
    }
    return  {
        expiration,
        toke: state.credentials?.access_token ?? null,
        refreshToken:state.credentials?.refresh_token ?? null
    }
});