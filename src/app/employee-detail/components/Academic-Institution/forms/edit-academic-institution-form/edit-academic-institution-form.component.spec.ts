import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcademicInstitutionFormComponent } from './edit-academic-institution-form.component';

describe('EditAcademicInstitutionFormComponent', () => {
  let component: EditAcademicInstitutionFormComponent;
  let fixture: ComponentFixture<EditAcademicInstitutionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAcademicInstitutionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAcademicInstitutionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
