import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTypeViewComponent } from './leave-type-view.component';

describe('LeaveTypeViewComponent', () => {
  let component: LeaveTypeViewComponent;
  let fixture: ComponentFixture<LeaveTypeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveTypeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveTypeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
