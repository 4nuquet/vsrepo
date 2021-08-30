import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly serverUrl = environment.apiUrl;
  private readonly auth = `client_id=${environment.apiConfig.client_id}&client_secret=${environment.apiConfig.client_secret}`;
  constructor(private readonly httpClient: HttpClient) {}

  public getUser(username: string): Promise<any> {
    return Promise.resolve({
      login: '4nuquet',
      id: 28198440,
      node_id: 'MDQ6VXNlcjI4MTk4NDQw',
      avatar_url: 'https://avatars.githubusercontent.com/u/28198440?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/4nuquet',
      html_url: 'https://github.com/4nuquet',
      followers_url: 'https://api.github.com/users/4nuquet/followers',
      following_url:
        'https://api.github.com/users/4nuquet/following{/other_user}',
      gists_url: 'https://api.github.com/users/4nuquet/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/4nuquet/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/4nuquet/subscriptions',
      organizations_url: 'https://api.github.com/users/4nuquet/orgs',
      repos_url: 'https://api.github.com/users/4nuquet/repos',
      events_url: 'https://api.github.com/users/4nuquet/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/4nuquet/received_events',
      type: 'User',
      site_admin: false,
      name: 'Johanny Velandia',
      company: null,
      blog: '',
      location: 'Colomabia',
      email: null,
      hireable: null,
      bio: 'FrontEnd Developer, React, Angular, Vue, Atomic Design\r\n',
      twitter_username: null,
      public_repos: 21,
      public_gists: 0,
      followers: 4,
      following: 0,
      created_at: '2017-04-29T17:10:15Z',
      updated_at: '2021-08-28T15:31:58Z',
    });
    return this.httpClient
      .get(`${this.serverUrl}users/${username}?${this.auth}`)
      .toPromise();
  }

  public searchRepository(username: string, query: string): Promise<any> {
    const perPage = 30;
    return Promise.resolve({
      total_count: 1,
      incomplete_results: false,
      items: [
        {
          id: 205867431,
          node_id: 'MDEwOlJlcG9zaXRvcnkyMDU4Njc0MzE=',
          name: 'notes-mern',
          full_name: '4nuquet/notes-mern',
          private: false,
          owner: {
            login: '4nuquet',
            id: 28198440,
            node_id: 'MDQ6VXNlcjI4MTk4NDQw',
            avatar_url: 'https://avatars.githubusercontent.com/u/28198440?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/4nuquet',
            html_url: 'https://github.com/4nuquet',
            followers_url: 'https://api.github.com/users/4nuquet/followers',
            following_url:
              'https://api.github.com/users/4nuquet/following{/other_user}',
            gists_url: 'https://api.github.com/users/4nuquet/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/4nuquet/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/4nuquet/subscriptions',
            organizations_url: 'https://api.github.com/users/4nuquet/orgs',
            repos_url: 'https://api.github.com/users/4nuquet/repos',
            events_url: 'https://api.github.com/users/4nuquet/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/4nuquet/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/4nuquet/notes-mern',
          description:
            'NodeJS - ExpressJS - Mongo | React - Redux - Rxjs - Bootstrap',
          fork: false,
          url: 'https://api.github.com/repos/4nuquet/notes-mern',
          forks_url: 'https://api.github.com/repos/4nuquet/notes-mern/forks',
          keys_url:
            'https://api.github.com/repos/4nuquet/notes-mern/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/4nuquet/notes-mern/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/4nuquet/notes-mern/teams',
          hooks_url: 'https://api.github.com/repos/4nuquet/notes-mern/hooks',
          issue_events_url:
            'https://api.github.com/repos/4nuquet/notes-mern/issues/events{/number}',
          events_url: 'https://api.github.com/repos/4nuquet/notes-mern/events',
          assignees_url:
            'https://api.github.com/repos/4nuquet/notes-mern/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/4nuquet/notes-mern/branches{/branch}',
          tags_url: 'https://api.github.com/repos/4nuquet/notes-mern/tags',
          blobs_url:
            'https://api.github.com/repos/4nuquet/notes-mern/git/blobs{/sha}',
          git_tags_url:
            'https://api.github.com/repos/4nuquet/notes-mern/git/tags{/sha}',
          git_refs_url:
            'https://api.github.com/repos/4nuquet/notes-mern/git/refs{/sha}',
          trees_url:
            'https://api.github.com/repos/4nuquet/notes-mern/git/trees{/sha}',
          statuses_url:
            'https://api.github.com/repos/4nuquet/notes-mern/statuses/{sha}',
          languages_url:
            'https://api.github.com/repos/4nuquet/notes-mern/languages',
          stargazers_url:
            'https://api.github.com/repos/4nuquet/notes-mern/stargazers',
          contributors_url:
            'https://api.github.com/repos/4nuquet/notes-mern/contributors',
          subscribers_url:
            'https://api.github.com/repos/4nuquet/notes-mern/subscribers',
          subscription_url:
            'https://api.github.com/repos/4nuquet/notes-mern/subscription',
          commits_url:
            'https://api.github.com/repos/4nuquet/notes-mern/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/4nuquet/notes-mern/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/4nuquet/notes-mern/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/4nuquet/notes-mern/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/4nuquet/notes-mern/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/4nuquet/notes-mern/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/4nuquet/notes-mern/merges',
          archive_url:
            'https://api.github.com/repos/4nuquet/notes-mern/{archive_format}{/ref}',
          downloads_url:
            'https://api.github.com/repos/4nuquet/notes-mern/downloads',
          issues_url:
            'https://api.github.com/repos/4nuquet/notes-mern/issues{/number}',
          pulls_url:
            'https://api.github.com/repos/4nuquet/notes-mern/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/4nuquet/notes-mern/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/4nuquet/notes-mern/notifications{?since,all,participating}',
          labels_url:
            'https://api.github.com/repos/4nuquet/notes-mern/labels{/name}',
          releases_url:
            'https://api.github.com/repos/4nuquet/notes-mern/releases{/id}',
          deployments_url:
            'https://api.github.com/repos/4nuquet/notes-mern/deployments',
          created_at: '2019-09-02T13:51:09Z',
          updated_at: '2019-09-02T13:54:16Z',
          pushed_at: '2021-05-10T11:41:36Z',
          git_url: 'git://github.com/4nuquet/notes-mern.git',
          ssh_url: 'git@github.com:4nuquet/notes-mern.git',
          clone_url: 'https://github.com/4nuquet/notes-mern.git',
          svn_url: 'https://github.com/4nuquet/notes-mern',
          homepage: null,
          size: 3488,
          stargazers_count: 0,
          watchers_count: 0,
          language: 'JavaScript',
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 4,
          license: null,
          forks: 0,
          open_issues: 4,
          watchers: 0,
          default_branch: 'master',
          score: 1.0,
        },
      ],
    });
    return this.httpClient
      .get(
        `${this.serverUrl}search/repositories?${this.auth}&q=${query}+user:${username}&per_page=${perPage}`
      )
      .toPromise();
  }
}
