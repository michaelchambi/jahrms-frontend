import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsRegistrationViewComponent } from './employee-details-registration-view.component';

describe('EmployeeDetailsRegistrationViewComponent', () => {
  let component: EmployeeDetailsRegistrationViewComponent;
  let fixture: ComponentFixture<EmployeeDetailsRegistrationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsRegistrationViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDetailsRegistrationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
