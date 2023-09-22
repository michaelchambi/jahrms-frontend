import { TestBed } from '@angular/core/testing';

import { DesignationChangesService } from './designation-changes.service';

describe('DesignationChangesService', () => {
  let service: DesignationChangesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignationChangesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
