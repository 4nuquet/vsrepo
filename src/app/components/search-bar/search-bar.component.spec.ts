import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from './search-bar.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SimpleChange, SimpleChanges } from '@angular/core';
describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.formSearch.controls.word.setValue('');
    component.formSearch.controls.filter.setValue('');
    component.formSearch.updateValueAndValidity();
    expect(component).toBeTruthy();
  });
  it('should call ngOnChanges', () => {
    const changesObj: SimpleChanges = {
      errorMessage: new SimpleChange(true, false, false),
    };
    component.ngOnChanges(changesObj);
    expect(component).toBeTruthy();
  });

  it('should call handleClickSearch and disable word', () => {
    component.formSearch.controls.word.setValue('asd');
    component.formSearch.controls.word.setErrors({ errors: null });
    component.formSearch.updateValueAndValidity();
    component.handleClickSearch();
    expect(component.formSearch.controls.word.disabled).toBeTruthy();
  });
  it('should call handleClickSearch and render error', () => {
    component.formSearch.controls.word.setValue('');
    component.formSearch.controls.word.setErrors({ errors: true });
    component.formSearch.updateValueAndValidity();
    component.handleClickSearch();
    expect(component.errorMessage).toBeDefined();
  });
  it('should call handleClickSearch and set default filter', () => {
    component.filters = [''];
    component.formSearch.controls.filter.setValue('');
    component.formSearch.updateValueAndValidity();
    component.handleClickSearch();
    expect(component.formSearch.controls.filter.value).toBe('repositorios');
  });
  it('should call handleClickFilter and enable word field', () => {
    component.handleClickFilter();
    expect(component.formSearch.controls.word.enabled).toBeTruthy();
  });
  it('should call handleClickRemove and set succesfulSearch as true', () => {
    component.handleClickRemove();
    expect(component.successfulSearch).toBeFalsy();
  });
});
