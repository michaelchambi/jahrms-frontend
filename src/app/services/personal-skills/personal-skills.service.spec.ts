import { TestBed } from '@angular/core/testing';

import { PersonalSkillsService } from './personal-skills.service';

describe('PersonalSkillsService', () => {
  let service: PersonalSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
