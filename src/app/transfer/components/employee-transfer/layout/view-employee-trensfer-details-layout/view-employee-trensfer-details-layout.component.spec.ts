import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeTrensferDetailsLayoutComponent } from './view-employee-trensfer-details-layout.component';

describe('ViewEmployeeTrensferDetailsLayoutComponent', () => {
  let component: ViewEmployeeTrensferDetailsLayoutComponent;
  let fixture: ComponentFixture<ViewEmployeeTrensferDetailsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeTrensferDetailsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeTrensferDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
