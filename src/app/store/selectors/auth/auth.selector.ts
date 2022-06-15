import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as authReducer from '../../reducers/auth/auth.reducers';

export const getUserState = createFeatureSelector<authReducer.AuthState>('auth');
export const getUserNameState = createFeatureSelector<authReducer.AuthState>('auth');

export const getUser = createSelector(getUserState,(state:authReducer.AuthState) => state.user);

export const getUserName = createSelector(getUserNameState, (state: authReducer.AuthState) => {
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
