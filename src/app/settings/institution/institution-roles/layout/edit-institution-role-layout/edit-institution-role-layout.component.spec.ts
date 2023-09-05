import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstitutionRoleLayoutComponent } from './edit-institution-role-layout.component';

describe('EditInstitutionRoleLayoutComponent', () => {
  let component: EditInstitutionRoleLayoutComponent;
  let fixture: ComponentFixture<EditInstitutionRoleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInstitutionRoleLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInstitutionRoleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
