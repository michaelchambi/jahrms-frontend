import { TestBed } from '@angular/core/testing';

import { CourtLevelService } from './court-level.service';

describe('CourtLevelService', () => {
  let service: CourtLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourtLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
