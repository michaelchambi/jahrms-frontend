import { TestBed } from '@angular/core/testing';

import { NextOfKinInfoService } from './next-of-kin-info.service';

describe('NextOfKinInfoService', () => {
  let service: NextOfKinInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NextOfKinInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
