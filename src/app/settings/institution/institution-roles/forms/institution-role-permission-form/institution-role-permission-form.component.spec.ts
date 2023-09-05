import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionRolePermissionFormComponent } from './institution-role-permission-form.component';

describe('InstitutionRolePermissionFormComponent', () => {
  let component: InstitutionRolePermissionFormComponent;
  let fixture: ComponentFixture<InstitutionRolePermissionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionRolePermissionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionRolePermissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
