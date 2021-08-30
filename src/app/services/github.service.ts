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
    return this.httpClient
      .get(`${this.serverUrl}users/${username}?${this.auth}`)
      .toPromise();
  }

  public searchRepository(username: string, query: string): Promise<any> {
    const perPage = 30;
    return this.httpClient
      .get(
        `${this.serverUrl}search/repositories?${this.auth}&q=${query}+user:${username}&per_page=${perPage}`
      )
      .toPromise();
  }

  public searchCode(username: string, query: string): Promise<any> {
    const perPage = 30;
    return this.httpClient
      .get(
        `${this.serverUrl}search/code?${this.auth}&q=${query}+user:${username}&per_page=${perPage}`
      )
      .toPromise();
  }

  public searchCommits(username: string, query: string): Promise<any> {
    const perPage = 30;
    return this.httpClient
      .get(
        `${this.serverUrl}search/commits?${this.auth}&q=${query}+user:${username}&per_page=${perPage}`
      )
      .toPromise();
  }
}
