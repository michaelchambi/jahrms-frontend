import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeTrensferLayoutComponent } from './view-employee-trensfer-layout.component';

describe('ViewEmployeeTrensferLayoutComponent', () => {
  let component: ViewEmployeeTrensferLayoutComponent;
  let fixture: ComponentFixture<ViewEmployeeTrensferLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeTrensferLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeTrensferLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
