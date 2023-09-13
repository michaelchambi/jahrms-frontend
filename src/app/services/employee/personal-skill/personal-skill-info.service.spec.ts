import { TestBed } from '@angular/core/testing';

import { PersonalSkillInfoService } from './personal-skill-info.service';

describe('PersonalSkillInfoService', () => {
  let service: PersonalSkillInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalSkillInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
