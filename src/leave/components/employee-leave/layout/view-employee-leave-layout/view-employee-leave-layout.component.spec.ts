import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeLeaveLayoutComponent } from './view-employee-leave-layout.component';

describe('ViewEmployeeLeaveLayoutComponent', () => {
  let component: ViewEmployeeLeaveLayoutComponent;
  let fixture: ComponentFixture<ViewEmployeeLeaveLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeLeaveLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeLeaveLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
