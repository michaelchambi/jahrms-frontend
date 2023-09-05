import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNonJudicialWorkStationLayoutComponent } from './edit-non-judicial-work-station-layout.component';

describe('EditNonJudicialWorkStationLayoutComponent', () => {
  let component: EditNonJudicialWorkStationLayoutComponent;
  let fixture: ComponentFixture<EditNonJudicialWorkStationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNonJudicialWorkStationLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNonJudicialWorkStationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
