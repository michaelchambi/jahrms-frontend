import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeTrensferFormComponent } from './edit-employee-trensfer-form.component';

describe('EditEmployeeTrensferFormComponent', () => {
  let component: EditEmployeeTrensferFormComponent;
  let fixture: ComponentFixture<EditEmployeeTrensferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeeTrensferFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmployeeTrensferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
