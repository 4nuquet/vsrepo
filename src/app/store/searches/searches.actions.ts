import { Repository } from './searches.state';
import { Action } from '@ngrx/store';

export const TYPE_ACTION = {
  addRepositories: '[ADDED] Repositories',
};

export class AddRepositories implements Action {
  readonly type = TYPE_ACTION.addRepositories;
  constructor(public payload: Repository[]) {}
}

export type SEARCH_ACTIONS = AddRepositories;
