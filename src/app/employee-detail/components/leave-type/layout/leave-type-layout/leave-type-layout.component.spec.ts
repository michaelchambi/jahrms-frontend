import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTypeLayoutComponent } from './leave-type-layout.component';

describe('LeaveTypeLayoutComponent', () => {
  let component: LeaveTypeLayoutComponent;
  let fixture: ComponentFixture<LeaveTypeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveTypeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveTypeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
