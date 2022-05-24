import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as authReducer from '../../reducers/auth/auth.reducers';

export const getPermissionStructureState = createFeatureSelector<authReducer.AuthState>('auth');
export const getUserNameState = createFeatureSelector<authReducer.AuthState>('auth');

export const getUserName = createSelector(getUserNameState, (state: authReducer.AuthState) => {
    let name = 'Admin';
    if(state?.user?.firstName){
        name = state.user.firstName
        if(state?.user?.lastName){
            name = name + ' ' + state?.user?.lastName
        }
    }
    return name;
});
