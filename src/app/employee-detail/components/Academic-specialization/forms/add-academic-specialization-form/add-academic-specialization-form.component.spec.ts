import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcademicSpecializationFormComponent } from './add-academic-specialization-form.component';

describe('AddAcademicSpecializationFormComponent', () => {
  let component: AddAcademicSpecializationFormComponent;
  let fixture: ComponentFixture<AddAcademicSpecializationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAcademicSpecializationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAcademicSpecializationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
