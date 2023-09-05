import { TestBed } from '@angular/core/testing';

import { DependantDetailsService } from './dependant-details.service';

describe('DependantDetailsService', () => {
  let service: DependantDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependantDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
