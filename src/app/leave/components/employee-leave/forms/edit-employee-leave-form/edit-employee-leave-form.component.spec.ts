import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeLeaveFormComponent } from './edit-employee-leave-form.component';

describe('EditEmployeeLeaveFormComponent', () => {
  let component: EditEmployeeLeaveFormComponent;
  let fixture: ComponentFixture<EditEmployeeLeaveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeeLeaveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmployeeLeaveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
