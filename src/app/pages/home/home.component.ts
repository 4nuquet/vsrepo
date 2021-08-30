import { User, UsersState } from './../../store/users/user.state';
import * as UsersActions from './../../store/users/users.actions';
import { GlobalState } from './../../store/store.config';
import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users$: Observable<UsersState>;
  firstSearchState: boolean = false;
  firstUser: any;
  secondSearchState: boolean = false;
  secondUser: any;
  public position: string;

  constructor(
    private store: Store<GlobalState>,
    private githubService: GithubService
  ) {
    this.users$ = this.store.select('usersState');
  }
  ngOnInit(): void {}

  public searchUser(username: string) {
    this.githubService.getUser(username).then((res) => {
      if (this.position == Position.first) {
        this.addFirstUser(res);
        this.firstSearchState = true;
      } else {
        this.addSecondUser(res);
        this.secondSearchState = true;
      }
    });
  }

  addFirstUser(user: User) {
    this.store.dispatch(new UsersActions.CreateFirstUser(user));
  }

  addSecondUser(user: User) {
    this.store.dispatch(new UsersActions.CreateSecondUser(user));
  }
}
export enum Position {
  first = 'first',
  second = 'second',
}
