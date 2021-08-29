import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss'],
})
export class CardUserComponent {
  @Input() user: any;
  constructor() {}

  get hasSocialInfo() {
    console.log(this.user);
    return this.user?.blog || this.user?.twitter_username;
  }
}
