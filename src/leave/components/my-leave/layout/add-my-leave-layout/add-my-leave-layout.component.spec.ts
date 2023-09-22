import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMyLeaveLayoutComponent } from './add-my-leave-layout.component';

describe('AddMyLeaveLayoutComponent', () => {
  let component: AddMyLeaveLayoutComponent;
  let fixture: ComponentFixture<AddMyLeaveLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMyLeaveLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMyLeaveLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
