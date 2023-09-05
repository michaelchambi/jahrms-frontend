import { TestBed } from '@angular/core/testing';

import { QualificationGradeService } from './qualification-grade.service';

describe('QualificationGradeService', () => {
  let service: QualificationGradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualificationGradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
