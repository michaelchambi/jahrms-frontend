import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyLeaveFormComponent } from './edit-my-leave-form.component';

describe('EditMyLeaveFormComponent', () => {
  let component: EditMyLeaveFormComponent;
  let fixture: ComponentFixture<EditMyLeaveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMyLeaveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMyLeaveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
