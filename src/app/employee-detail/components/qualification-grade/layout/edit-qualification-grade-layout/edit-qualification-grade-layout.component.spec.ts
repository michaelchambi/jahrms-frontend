import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQualificationGradeLayoutComponent } from './edit-qualification-grade-layout.component';

describe('EditQualificationGradeLayoutComponent', () => {
  let component: EditQualificationGradeLayoutComponent;
  let fixture: ComponentFixture<EditQualificationGradeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQualificationGradeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditQualificationGradeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
