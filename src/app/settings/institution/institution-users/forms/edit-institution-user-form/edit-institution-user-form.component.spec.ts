import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstitutionUserFormComponent } from './edit-institution-user-form.component';

describe('EditInstitutionUserFormComponent', () => {
  let component: EditInstitutionUserFormComponent;
  let fixture: ComponentFixture<EditInstitutionUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInstitutionUserFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInstitutionUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
