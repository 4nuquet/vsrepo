import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor(private scroller: ViewportScroller) {}

  scrollTo(elementId: string, debounce = 1000) {
    setTimeout(() => this.scroller.scrollToAnchor(elementId), debounce);
  }

  handleFetchErrors(typeError: string): string {
    switch (typeError) {
      case Errors.notFound:
        return 'Usuario no encontrado, intenta de nuevo';
      default:
        return '';
    }
  }
}

export enum Errors {
  notFound = 'Not Found',
}
