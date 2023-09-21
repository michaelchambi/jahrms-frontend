import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeAssignmentFormComponent } from './edit-employee-assignment-form.component';

describe('EditEmployeeAssignmentFormComponent', () => {
  let component: EditEmployeeAssignmentFormComponent;
  let fixture: ComponentFixture<EditEmployeeAssignmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeeAssignmentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmployeeAssignmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
