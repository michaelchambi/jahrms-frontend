import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMyLeaveLayoutComponent } from './edit-my-leave-layout.component';

describe('EditMyLeaveLayoutComponent', () => {
  let component: EditMyLeaveLayoutComponent;
  let fixture: ComponentFixture<EditMyLeaveLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMyLeaveLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMyLeaveLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
