import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonJudicialWorkStationLayoutComponent } from './non-judicial-work-station-layout.component';

describe('NonJudicialWorkStationLayoutComponent', () => {
  let component: NonJudicialWorkStationLayoutComponent;
  let fixture: ComponentFixture<NonJudicialWorkStationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonJudicialWorkStationLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonJudicialWorkStationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
