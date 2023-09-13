import { TestBed } from '@angular/core/testing';

import { DependantTypeService } from './dependant-type.service';

describe('DependantTypeService', () => {
  let service: DependantTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependantTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
