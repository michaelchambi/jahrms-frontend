import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionRolePermissionLayoutComponent } from './institution-role-permission-layout.component';

describe('InstitutionRolePermissionLayoutComponent', () => {
  let component: InstitutionRolePermissionLayoutComponent;
  let fixture: ComponentFixture<InstitutionRolePermissionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionRolePermissionLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionRolePermissionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
