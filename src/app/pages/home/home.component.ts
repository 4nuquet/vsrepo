import { GithubService } from './../../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  firstSearchState: boolean = false;
  firstUser: any;
  secondSearchState: boolean = false;
  secondUser: any;
  constructor(private githubService: GithubService) {}

  public searchUser(username: string) {
    this.githubService.getUser(username).then((res) => {
      if (this.firstUser) {
        this.secondUser = res;
        this.secondSearchState = true;
      } else {
        this.firstUser = res;
        this.firstSearchState = true;
      }
    });
  }
}
