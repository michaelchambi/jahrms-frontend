import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAcademicSpecializationFormComponent } from './edit-academic-specialization-form.component';

describe('EditAcademicSpecializationFormComponent', () => {
  let component: EditAcademicSpecializationFormComponent;
  let fixture: ComponentFixture<EditAcademicSpecializationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAcademicSpecializationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAcademicSpecializationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
