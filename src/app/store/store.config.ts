import { USER_ACTIONS } from './users/users.actions';
import { ActionReducerMap } from '@ngrx/store';
import { UsersState } from './users/user.state';
import * as usersActions from './users/users.actions';
import { usersReducer } from './users/users.reducer';

export interface GlobalState {
  usersState: UsersState;
}

export const globalActions = {
  usersActions,
};

export const globalReducers: ActionReducerMap<GlobalState, USER_ACTIONS> = {
  usersState: usersReducer,
};
