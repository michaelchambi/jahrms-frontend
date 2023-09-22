import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeTrensferLayoutComponent } from './edit-employee-trensfer-layout.component';

describe('EditEmployeeTrensferLayoutComponent', () => {
  let component: EditEmployeeTrensferLayoutComponent;
  let fixture: ComponentFixture<EditEmployeeTrensferLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeeTrensferLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmployeeTrensferLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
