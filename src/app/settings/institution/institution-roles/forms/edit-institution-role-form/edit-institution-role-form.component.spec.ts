import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstitutionRoleFormComponent } from './edit-institution-role-form.component';

describe('EditInstitutionRoleFormComponent', () => {
  let component: EditInstitutionRoleFormComponent;
  let fixture: ComponentFixture<EditInstitutionRoleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInstitutionRoleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInstitutionRoleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
