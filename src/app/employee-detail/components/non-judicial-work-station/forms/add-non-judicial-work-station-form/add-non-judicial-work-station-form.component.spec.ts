import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNonJudicialWorkStationFormComponent } from './add-non-judicial-work-station-form.component';

describe('AddNonJudicialWorkStationFormComponent', () => {
  let component: AddNonJudicialWorkStationFormComponent;
  let fixture: ComponentFixture<AddNonJudicialWorkStationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNonJudicialWorkStationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNonJudicialWorkStationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
