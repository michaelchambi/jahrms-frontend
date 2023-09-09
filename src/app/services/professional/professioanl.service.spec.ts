import { TestBed } from '@angular/core/testing';

import { ProfessioanlService } from './professioanl.service';

describe('ProfessioanlService', () => {
  let service: ProfessioanlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessioanlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
