import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeaveTypeLayoutComponent } from './edit-leave-type-layout.component';

describe('EditLeaveTypeLayoutComponent', () => {
  let component: EditLeaveTypeLayoutComponent;
  let fixture: ComponentFixture<EditLeaveTypeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLeaveTypeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLeaveTypeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
