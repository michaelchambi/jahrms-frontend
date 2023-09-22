import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRequestLayaoutComponent } from './employee-request-layaout.component';

describe('EmployeeRequestLayaoutComponent', () => {
  let component: EmployeeRequestLayaoutComponent;
  let fixture: ComponentFixture<EmployeeRequestLayaoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRequestLayaoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRequestLayaoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
