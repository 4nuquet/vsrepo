import { initialState, UsersState } from './user.state';
import { USER_ACTIONS, TYPE_ACTION } from './users.actions';

export function usersReducer(
  state: UsersState = initialState,
  action: USER_ACTIONS
) {
  const { type, payload } = action;
  switch (type) {
    case TYPE_ACTION.createFirstUser:
      return { ...state, firstUser: payload };
    case TYPE_ACTION.createSecondUser:
      return { ...state, secondUser: payload };
    default:
      return state;
  }
}
