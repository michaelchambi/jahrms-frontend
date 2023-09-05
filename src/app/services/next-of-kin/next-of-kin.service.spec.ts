import { TestBed } from '@angular/core/testing';

import { NextOfKinService } from './next-of-kin.service';

describe('NextOfKinService', () => {
  let service: NextOfKinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NextOfKinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
