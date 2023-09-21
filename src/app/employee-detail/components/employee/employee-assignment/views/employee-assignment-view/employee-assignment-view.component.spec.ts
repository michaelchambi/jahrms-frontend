import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAssignmentViewComponent } from './employee-assignment-view.component';

describe('EmployeeAssignmentViewComponent', () => {
  let component: EmployeeAssignmentViewComponent;
  let fixture: ComponentFixture<EmployeeAssignmentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAssignmentViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAssignmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
