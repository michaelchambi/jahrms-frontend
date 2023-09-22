import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveManagementFormComponent } from './leave-management-form.component';

describe('LeaveManagementFormComponent', () => {
  let component: LeaveManagementFormComponent;
  let fixture: ComponentFixture<LeaveManagementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveManagementFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
