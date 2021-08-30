import { User } from './user.state';
import { Action } from '@ngrx/store';

export const TYPE_ACTION = {
  createFirstUser: '[CREATE] First User',
  createSecondUser: '[CREATE] Second User',
  editFirstUser: '[EDIT] First User',
  editSecondUser: '[EDIT] Second User',
};

export class CreateFirstUser implements Action {
  readonly type = TYPE_ACTION.createFirstUser;
  constructor(public payload: User) {}
}
export class CreateSecondUser implements Action {
  readonly type = TYPE_ACTION.createSecondUser;
  constructor(public payload: User) {}
}

export class EditFirstUser implements Action {
  readonly type = TYPE_ACTION.editFirstUser;
  constructor(public payload: User) {}
}

export class EditSecondUser implements Action {
  readonly type = TYPE_ACTION.editSecondUser;
  constructor(public payload: User) {}
}

export type USER_ACTIONS =
  | CreateFirstUser
  | CreateSecondUser
  | EditFirstUser
  | EditSecondUser;
