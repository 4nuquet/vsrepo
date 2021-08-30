import { USER_ACTIONS } from './users/users.actions';
import { Action, ActionReducerMap } from '@ngrx/store';
import { UsersState } from './users/user.state';
import * as usersActions from './users/users.actions';
import { usersReducer } from './users/users.reducer';
import { SearchesState } from './searches/searches.state';
import * as searchesActions from './searches/searches.actions';
import { searchesReducer } from './searches/searches.reducer';
import { SEARCH_ACTIONS } from './searches/searches.actions';

export interface GlobalState {
  usersState: UsersState;
  searchesState: SearchesState;
}

export const globalActions = {
  usersActions,
  searchesActions,
};

export const globalReducers: ActionReducerMap<any, any> = {
  usersState: usersReducer,
  searchesState: searchesReducer,
};
