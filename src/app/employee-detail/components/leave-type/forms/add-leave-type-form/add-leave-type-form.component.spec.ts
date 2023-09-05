import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaveTypeFormComponent } from './add-leave-type-form.component';

describe('AddLeaveTypeFormComponent', () => {
  let component: AddLeaveTypeFormComponent;
  let fixture: ComponentFixture<AddLeaveTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLeaveTypeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddLeaveTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
