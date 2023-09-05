import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolePermissionLayoutComponent } from './role-permission-layout.component';

describe('RolePermissionLayoutComponent', () => {
  let component: RolePermissionLayoutComponent;
  let fixture: ComponentFixture<RolePermissionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolePermissionLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolePermissionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
