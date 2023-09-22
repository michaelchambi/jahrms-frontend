import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeTrensferLayoutComponent } from './add-employee-trensfer-layout.component';

describe('AddEmployeeTrensferLayoutComponent', () => {
  let component: AddEmployeeTrensferLayoutComponent;
  let fixture: ComponentFixture<AddEmployeeTrensferLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeTrensferLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeTrensferLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
