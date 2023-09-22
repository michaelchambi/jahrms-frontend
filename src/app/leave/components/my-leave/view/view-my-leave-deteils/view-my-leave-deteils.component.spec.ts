import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyLeaveDeteilsComponent } from './view-my-leave-deteils.component';

describe('ViewMyLeaveDeteilsComponent', () => {
  let component: ViewMyLeaveDeteilsComponent;
  let fixture: ComponentFixture<ViewMyLeaveDeteilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyLeaveDeteilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyLeaveDeteilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
