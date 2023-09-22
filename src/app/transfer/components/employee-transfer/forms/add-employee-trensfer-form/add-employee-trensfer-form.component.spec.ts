import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeTrensferFormComponent } from './add-employee-trensfer-form.component';

describe('AddEmployeeTrensferFormComponent', () => {
  let component: AddEmployeeTrensferFormComponent;
  let fixture: ComponentFixture<AddEmployeeTrensferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeeTrensferFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeeTrensferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
