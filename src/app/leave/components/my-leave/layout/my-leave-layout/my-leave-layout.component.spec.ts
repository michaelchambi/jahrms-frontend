import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLeaveLayoutComponent } from './my-leave-layout.component';

describe('MyLeaveLayoutComponent', () => {
  let component: MyLeaveLayoutComponent;
  let fixture: ComponentFixture<MyLeaveLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLeaveLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLeaveLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
