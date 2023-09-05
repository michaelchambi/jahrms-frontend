import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyLeaveComponent } from './view-my-leave.component';

describe('ViewMyLeaveComponent', () => {
  let component: ViewMyLeaveComponent;
  let fixture: ComponentFixture<ViewMyLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
