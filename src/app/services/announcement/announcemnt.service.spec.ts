import { TestBed } from '@angular/core/testing';

import { AnnouncemntService } from './announcemnt.service';

describe('AnnouncemntService', () => {
  let service: AnnouncemntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnouncemntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
