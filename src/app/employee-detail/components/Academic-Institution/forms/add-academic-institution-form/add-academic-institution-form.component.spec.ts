import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAcademicInstitutionFormComponent } from './add-academic-institution-form.component';

describe('AddAcademicInstitutionFormComponent', () => {
  let component: AddAcademicInstitutionFormComponent;
  let fixture: ComponentFixture<AddAcademicInstitutionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAcademicInstitutionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAcademicInstitutionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
