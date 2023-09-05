import { TestBed } from '@angular/core/testing';

import { DependantTypesService } from './dependant-types.service';

describe('DependantTypesService', () => {
  let service: DependantTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependantTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
