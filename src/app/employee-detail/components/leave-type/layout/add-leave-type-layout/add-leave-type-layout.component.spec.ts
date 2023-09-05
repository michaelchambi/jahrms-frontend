import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaveTypeLayoutComponent } from './add-leave-type-layout.component';

describe('AddLeaveTypeLayoutComponent', () => {
  let component: AddLeaveTypeLayoutComponent;
  let fixture: ComponentFixture<AddLeaveTypeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLeaveTypeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLeaveTypeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
