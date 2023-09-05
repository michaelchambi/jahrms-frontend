import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQualificationGradeFormComponent } from './edit-qualification-grade-form.component';

describe('EditQualificationGradeFormComponent', () => {
  let component: EditQualificationGradeFormComponent;
  let fixture: ComponentFixture<EditQualificationGradeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQualificationGradeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditQualificationGradeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
