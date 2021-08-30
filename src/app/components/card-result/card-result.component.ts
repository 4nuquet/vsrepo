import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-result',
  templateUrl: './card-result.component.html',
  styleUrls: ['./card-result.component.scss'],
})
export class CardResultComponent {
  @Input() result: any;
  @Input() type: string;

  constructor() {}

  get icon(): string {
    switch (this.type) {
      case TypeResult.repo:
        return 'bi bi-box-seam';
      case TypeResult.code:
        return 'bi bi-code';
      case TypeResult.commit:
        return 'bi bi-journal-check';
      default:
        return '';
    }
  }
}

export enum TypeResult {
  repo = 'repo',
  code = 'code',
  commit = 'commit',
}
