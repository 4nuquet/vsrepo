import { User, UsersState } from './../../store/users/user.state';
import * as UsersActions from './../../store/users/users.actions';
import { GlobalState } from './../../store/store.config';
import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  Repository,
  SearchesState,
} from './../../store/searches/searches.state';
import * as SearchesActions from './../../store/searches/searches.actions';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users$: Observable<UsersState>;
  users: UsersState;
  searches$: Observable<SearchesState>;
  searches: any[];
  searchType: string;
  searchFilters: string[];
  firstSearchState: boolean = false;
  secondSearchState: boolean = false;
  searchesState: boolean = false;
  position: string;
  errorMessage: string | null;

  constructor(
    private store: Store<GlobalState>,
    private githubService: GithubService,
    private utilService: UtilService
  ) {
    this.users$ = this.store.select('usersState');
    this.searches$ = this.store.select('searchesState');
  }
  ngOnInit(): void {
    this.users$.subscribe((user) => {
      this.users = user;
    });
    this.searchFilters = [Filters.repository, Filters.code, Filters.commit];
  }

  public handleFilter(query: string): void {
    switch (this.searchType) {
      case Filters.repository:
        this.searchRepository(query);
        break;
      default:
        break;
    }
    this.searchesState = true;
  }

  public searchUser(username: string) {
    this.errorMessage = null;
    this.githubService
      .getUser(username)
      .then((res) => {
        if (this.position == Position.first) {
          this.addFirstUser(res);
          this.firstSearchState = true;
        } else {
          this.addSecondUser(res);
          this.secondSearchState = true;
        }
      })
      .catch((e) => {
        this.errorMessage = this.utilService.handleFetchErrors(
          e?.error.message
        );
      });
  }
  public searchRepository(query: string) {
    const firstUser = this.users.firstUser?.login || '';
    const secondUser = this.users.secondUser?.login || '';
    const firstRequest = this.githubService.searchRepository(firstUser, query);
    const secondRequest = this.githubService.searchRepository(
      secondUser,
      query
    );
    Promise.all([firstRequest, secondRequest])
      .then((response) => {
        const repositories = [...response[0]?.items, ...response[1]?.items];
        this.searches = repositories;
        this.searchType = Filters.repository;
        this.searchesState = true;
        this.addRepository(repositories);
      })
      .catch((e) => {
        this.errorMessage = this.utilService.handleFetchErrors(
          e?.error.message
        );
      });
  }

  addRepository(repo: Repository[]) {
    this.store.dispatch(new SearchesActions.AddRepositories(repo));
    this.utilService.scrollTo('home-results-list', 500);
  }

  addFirstUser(user: User) {
    this.store.dispatch(new UsersActions.CreateFirstUser(user));
  }

  addSecondUser(user: User) {
    this.store.dispatch(new UsersActions.CreateSecondUser(user));
    this.utilService.scrollTo('home-results');
  }
}
export enum Position {
  first = 'first',
  second = 'second',
}

export enum Filters {
  repository = 'repositorio',
  code = 'codigo',
  commit = 'commits',
}
