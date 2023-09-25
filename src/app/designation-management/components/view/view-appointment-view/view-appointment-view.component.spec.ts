import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentViewComponent } from './view-appointment-view.component';

describe('ViewAppointmentViewComponent', () => {
  let component: ViewAppointmentViewComponent;
  let fixture: ComponentFixture<ViewAppointmentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppointmentViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAppointmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
