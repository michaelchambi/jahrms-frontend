import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionRoleLayoutComponent } from './institution-role-layout.component';

describe('InstitutionRoleLayoutComponent', () => {
  let component: InstitutionRoleLayoutComponent;
  let fixture: ComponentFixture<InstitutionRoleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionRoleLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionRoleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
