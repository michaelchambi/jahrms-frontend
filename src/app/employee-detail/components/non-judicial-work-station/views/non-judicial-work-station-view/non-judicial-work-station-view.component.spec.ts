import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonJudicialWorkStationViewComponent } from './non-judicial-work-station-view.component';

describe('NonJudicialWorkStationViewComponent', () => {
  let component: NonJudicialWorkStationViewComponent;
  let fixture: ComponentFixture<NonJudicialWorkStationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonJudicialWorkStationViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonJudicialWorkStationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
