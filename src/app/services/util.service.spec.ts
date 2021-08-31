import { TestBed } from '@angular/core/testing';

import { Errors, UtilService } from './util.service';

describe('UtilService', () => {
  let service: UtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get color from type prop', () => {
    const cases = [Errors.notFound, ''];
    const matches = ['Usuario no encontrado, intenta de nuevo', ''];
    cases.forEach((value, index) => {
      const val = service.handleFetchErrors(value);
      expect(val).toBe(matches[index]);
    });
  });
});
