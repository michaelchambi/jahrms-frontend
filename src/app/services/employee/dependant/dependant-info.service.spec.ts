import { TestBed } from '@angular/core/testing';

import { DependantInfoService } from './dependant-info.service';

describe('DependantInfoService', () => {
  let service: DependantInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependantInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
