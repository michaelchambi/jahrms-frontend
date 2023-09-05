import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsHomeChartsViewComponent } from './applicants-home-charts-view.component';

describe('ApplicantsHomeChartsViewComponent', () => {
  let component: ApplicantsHomeChartsViewComponent;
  let fixture: ComponentFixture<ApplicantsHomeChartsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantsHomeChartsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantsHomeChartsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
