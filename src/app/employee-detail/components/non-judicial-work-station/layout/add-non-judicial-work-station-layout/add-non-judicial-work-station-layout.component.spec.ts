import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNonJudicialWorkStationLayoutComponent } from './add-non-judicial-work-station-layout.component';

describe('AddNonJudicialWorkStationLayoutComponent', () => {
  let component: AddNonJudicialWorkStationLayoutComponent;
  let fixture: ComponentFixture<AddNonJudicialWorkStationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNonJudicialWorkStationLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNonJudicialWorkStationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
