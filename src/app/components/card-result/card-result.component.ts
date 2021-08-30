import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-result',
  templateUrl: './card-result.component.html',
  styleUrls: ['./card-result.component.scss'],
})
export class CardResultComponent {
  @Input() result: Repository;
  @Input() type: string;

  constructor() {}

  get icon(): string {
    switch (this.type) {
      case TypeResult.repository:
        return 'bi bi-box-seam';
      case TypeResult.code:
        return 'bi bi-code';
      case TypeResult.commit:
        return 'bi bi-journal-check';
      default:
        return '';
    }
  }

  get color(): string {
    switch (this.type) {
      case TypeResult.repository:
        return 'repository';
      case TypeResult.code:
        return 'code';
      case TypeResult.commit:
        return 'commit';
      default:
        return '';
    }
  }

  get languageIcon(): string {
    switch (this.result.language) {
      case Languages.javascript:
        return '/assets/icons/javascript.svg';
      case Languages.javascript:
        return '/assets/icons/typescript.svg';
      default:
        return '';
    }
  }
}

export enum TypeResult {
  repository = 'repositorio',
  code = 'codigo',
  commit = 'commits',
}

export enum Languages {
  javascript = 'JavaScript',
  typescript = 'TypeScript',
}

export interface Repository {
  id?: number;
  name: string;
  owner: { login: string };
  language: string;
  watchers: string;
  stargazers_count: number;
  forks?: number;
}
