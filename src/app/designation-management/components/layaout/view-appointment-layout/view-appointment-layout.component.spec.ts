import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppointmentLayoutComponent } from './view-appointment-layout.component';

describe('ViewAppointmentLayoutComponent', () => {
  let component: ViewAppointmentLayoutComponent;
  let fixture: ComponentFixture<ViewAppointmentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppointmentLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAppointmentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
