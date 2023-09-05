import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeLeaveComponent } from './view-employee-leave.component';

describe('ViewEmployeeLeaveComponent', () => {
  let component: ViewEmployeeLeaveComponent;
  let fixture: ComponentFixture<ViewEmployeeLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
