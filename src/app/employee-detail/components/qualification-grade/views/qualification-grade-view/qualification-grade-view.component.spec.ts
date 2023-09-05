import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationGradeViewComponent } from './qualification-grade-view.component';

describe('QualificationGradeViewComponent', () => {
  let component: QualificationGradeViewComponent;
  let fixture: ComponentFixture<QualificationGradeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationGradeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationGradeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
