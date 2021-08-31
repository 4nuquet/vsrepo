import { GithubService } from './../../services/github.service';
import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
} from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { HomeComponent, Position } from './home.component';
import { UtilService } from './../../services/util.service';
import * as userInitialState from 'src/app/store/users/user.state';
import * as searchesInitialState from 'src/app/store/searches/searches.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TypeResult } from 'src/app/components/card-result/card-result.component';

const mockSearchRepositoriesResponse = {
  id: 123,
  name: 'string',
  owner: { login: 'string' },
  language: 'string',
  watchers: 'string',
  stargazers_count: 10,
  forks: 10,
};

const mockSearchCommitsResponse = {
  commit: { message: 'string' },
  author: { login: 'string' },
  repository: { name: 'string' },
};

const mockUserState = {
  firstUser: { login: 'first' },
  secondUser: { login: 'first' },
};

const mockUserInfo = {
  login: 'string',
  name: 'string',
  bio: 'string',
  followers: 'string',
  public_repos: 'string',
  blog: 'string',
  twitter_username: 'string',
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const initialState = {
    ...userInitialState.initialState,
    ...searchesInitialState.initialState,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomeComponent],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: GithubService,
          useValue: {
            searchRepository: () => {
              return Promise.resolve({
                items: [mockSearchRepositoriesResponse],
              });
            },
            searchCommits: () => {
              return Promise.resolve({ items: [mockSearchCommitsResponse] });
            },
            getUser: () => {
              return Promise.resolve(mockUserInfo);
            },
          },
        },
        UtilService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleFilter with repository Action', fakeAsync(() => {
    const store = TestBed.inject(MockStore);
    store.setState({ usersState: mockUserState });
    component.searchType = TypeResult.repository;
    component.handleFilter('word');
    tick();
    expect(component.searchesState).toBeTruthy();
    flush();
  }));

  it('should call handleFilter with commit Action', fakeAsync(() => {
    const store = TestBed.inject(MockStore);
    store.setState({ usersState: mockUserState });
    component.searchType = TypeResult.commit;
    component.handleFilter('word');
    tick();
    expect(component.searchesState).toBeTruthy();
    flush();
  }));

  it('should call handleFilter with default case', fakeAsync(() => {
    const store = TestBed.inject(MockStore);
    store.setState({ usersState: mockUserState });
    component.searchType = '';
    component.handleFilter('');
    tick();
    expect(component.searchesState).toBeTruthy();
    flush();
  }));

  it('should call searchUser and set first user', fakeAsync(() => {
    component.position = Position.first;
    component.searchUser('username');
    tick();
    expect(component.firstSearchState).toBeTruthy();
    flush();
  }));

  it('should call searchUser and set second user', fakeAsync(() => {
    component.position = Position.second;
    component.searchUser('username');
    tick();
    expect(component.secondSearchState).toBeTruthy();
    flush();
  }));

  it('should call searchUser and fail fetch', fakeAsync(() => {
    const githubService = TestBed.inject(GithubService);
    spyOn(githubService, 'getUser').and.returnValue(
      Promise.reject({ error: { message: 'error' } })
    );
    component.searchUser('username');
    tick();
    expect(component.errorMessage).toBeDefined();
    flush();
  }));
  it('should call searchRepository and fail fetch', fakeAsync(() => {
    const store = TestBed.inject(MockStore);
    store.setState({ usersState: mockUserState });
    const githubService = TestBed.inject(GithubService);
    spyOn(githubService, 'searchRepository').and.returnValue(
      Promise.reject({ error: { message: 'error' } })
    );
    component.searchRepository('username');
    tick();
    expect(component.errorMessage).toBeDefined();
    flush();
  }));

  it('should call searchCommits and fail fetch', fakeAsync(() => {
    const store = TestBed.inject(MockStore);
    store.setState({ usersState: mockUserState });
    const githubService = TestBed.inject(GithubService);
    spyOn(githubService, 'searchCommits').and.returnValue(
      Promise.reject({ error: { message: 'error' } })
    );
    component.searchCommits('username');
    tick();
    expect(component.errorMessage).toBeDefined();
    flush();
  }));
});
