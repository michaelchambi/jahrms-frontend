import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationGradeLayoutComponent } from './qualification-grade-layout.component';

describe('QualificationGradeLayoutComponent', () => {
  let component: QualificationGradeLayoutComponent;
  let fixture: ComponentFixture<QualificationGradeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationGradeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationGradeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
