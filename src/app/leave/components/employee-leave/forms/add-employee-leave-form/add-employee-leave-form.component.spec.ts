import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeLeaveFormComponent } from './add-employee-leave-form.component';

describe('AddEmployeeLeaveFormComponent', () => {
  let component: AddEmployeeLeaveFormComponent;
  let fixture: ComponentFixture<AddEmployeeLeaveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeLeaveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeLeaveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
