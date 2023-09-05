import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNonJudicialWorkStationFormComponent } from './edit-non-judicial-work-station-form.component';

describe('EditNonJudicialWorkStationFormComponent', () => {
  let component: EditNonJudicialWorkStationFormComponent;
  let fixture: ComponentFixture<EditNonJudicialWorkStationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNonJudicialWorkStationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNonJudicialWorkStationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
