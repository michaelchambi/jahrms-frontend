import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeLeaveLayoutComponent } from './add-employee-leave-layout.component';

describe('AddEmployeeLeaveLayoutComponent', () => {
  let component: AddEmployeeLeaveLayoutComponent;
  let fixture: ComponentFixture<AddEmployeeLeaveLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeLeaveLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeLeaveLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
