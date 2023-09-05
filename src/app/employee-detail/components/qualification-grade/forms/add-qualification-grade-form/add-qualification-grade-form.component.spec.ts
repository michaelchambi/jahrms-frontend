import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQualificationGradeFormComponent } from './add-qualification-grade-form.component';

describe('AddQualificationGradeFormComponent', () => {
  let component: AddQualificationGradeFormComponent;
  let fixture: ComponentFixture<AddQualificationGradeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQualificationGradeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQualificationGradeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
