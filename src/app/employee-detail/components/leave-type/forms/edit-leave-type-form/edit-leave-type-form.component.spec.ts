import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeaveTypeFormComponent } from './edit-leave-type-form.component';

describe('EditLeaveTypeFormComponent', () => {
  let component: EditLeaveTypeFormComponent;
  let fixture: ComponentFixture<EditLeaveTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLeaveTypeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLeaveTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
