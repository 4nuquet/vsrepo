import { SEARCH_ACTIONS, TYPE_ACTION } from './searches.actions';
import { initialState, SearchesState } from './searches.state';

export function searchesReducer(
  state: SearchesState = initialState,
  action: SEARCH_ACTIONS
) {
  const { type, payload } = action;
  switch (type) {
    case TYPE_ACTION.addRepositories:
      return { ...state, repositories: payload };
    default:
      return state;
  }
}
