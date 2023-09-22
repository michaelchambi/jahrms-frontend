import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeTrensferViewComponent } from './view-employee-trensfer-view.component';

describe('ViewEmployeeTrensferViewComponent', () => {
  let component: ViewEmployeeTrensferViewComponent;
  let fixture: ComponentFixture<ViewEmployeeTrensferViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeTrensferViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeTrensferViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
