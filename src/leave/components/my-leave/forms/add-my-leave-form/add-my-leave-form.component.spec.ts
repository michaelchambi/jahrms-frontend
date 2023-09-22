import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMyLeaveFormComponent } from './add-my-leave-form.component';

describe('AddMyLeaveFormComponent', () => {
  let component: AddMyLeaveFormComponent;
  let fixture: ComponentFixture<AddMyLeaveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMyLeaveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMyLeaveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
