import { TestBed } from '@angular/core/testing';

import { LeaveTypeService } from './leaveType.service';

describe('LeaveTypeService', () => {
  let service: LeaveTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
