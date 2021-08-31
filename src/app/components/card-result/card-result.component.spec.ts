import { ComponentFixture, TestBed } from '@angular/core/testing';

import {
  CardResultComponent,
  TypeResult,
  Languages,
} from './card-result.component';

describe('CardResultComponent', () => {
  let component: CardResultComponent;
  let fixture: ComponentFixture<CardResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardResultComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get icon from type prop', () => {
    const cases = [TypeResult.repository, TypeResult.code, TypeResult.commit];
    const matches = ['bi bi-box-seam', 'bi bi-code', 'bi bi-journal-check'];
    cases.forEach((value, index) => {
      component.type = value;
      expect(component.icon).toBe(matches[index]);
    });
  });

  it('should get color from type prop', () => {
    const cases = [TypeResult.repository, TypeResult.code, TypeResult.commit];
    const matches = ['repository', 'code', 'commit'];
    cases.forEach((value, index) => {
      component.type = value;
      expect(component.color).toBe(matches[index]);
    });
  });

  it('should get languageIcon path', () => {
    component.result = { language: '' };
    const cases = [
      Languages.javascript,
      Languages.typescript,
      Languages.html,
      Languages.css,
      '',
    ];
    const matches = [
      '/assets/icons/javascript.svg',
      '/assets/icons/typescript.svg',
      '/assets/icons/html5.svg',
      '/assets/icons/css3.svg',
      '',
    ];
    cases.forEach((value, index) => {
      component.result.language = value;
      expect(component.languageIcon).toBe(matches[index]);
    });
  });
});
