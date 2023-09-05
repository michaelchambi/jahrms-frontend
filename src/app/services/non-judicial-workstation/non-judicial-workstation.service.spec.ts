import { TestBed } from '@angular/core/testing';

import { NonJudicialWorkstationService } from './non-judicial-workstation.service';

describe('NonJudicialWorkstationService', () => {
  let service: NonJudicialWorkstationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonJudicialWorkstationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
