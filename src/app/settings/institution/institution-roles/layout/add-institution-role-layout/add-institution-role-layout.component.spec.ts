import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstitutionRoleLayoutComponent } from './add-institution-role-layout.component';

describe('AddInstitutionRoleLayoutComponent', () => {
  let component: AddInstitutionRoleLayoutComponent;
  let fixture: ComponentFixture<AddInstitutionRoleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInstitutionRoleLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInstitutionRoleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
