import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstitutionRoleFormComponent } from './add-institution-role-form.component';

describe('AddInstitutionRoleFormComponent', () => {
  let component: AddInstitutionRoleFormComponent;
  let fixture: ComponentFixture<AddInstitutionRoleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInstitutionRoleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInstitutionRoleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
