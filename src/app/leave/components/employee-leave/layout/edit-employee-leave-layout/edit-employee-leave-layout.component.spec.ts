import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeLeaveLayoutComponent } from './edit-employee-leave-layout.component';

describe('EditEmployeeLeaveLayoutComponent', () => {
  let component: EditEmployeeLeaveLayoutComponent;
  let fixture: ComponentFixture<EditEmployeeLeaveLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeeLeaveLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmployeeLeaveLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
