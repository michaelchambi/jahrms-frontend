import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeAssignmentFormComponent } from './add-employee-assignment-form.component';

describe('AddEmployeeAssignmentFormComponent', () => {
  let component: AddEmployeeAssignmentFormComponent;
  let fixture: ComponentFixture<AddEmployeeAssignmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeAssignmentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeAssignmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
