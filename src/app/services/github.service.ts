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
}
