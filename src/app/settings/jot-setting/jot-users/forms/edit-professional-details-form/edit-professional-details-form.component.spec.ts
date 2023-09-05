import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfessionalDetailsFormComponent } from './edit-professional-details-form.component';

describe('EditProfessionalDetailsFormComponent', () => {
  let component: EditProfessionalDetailsFormComponent;
  let fixture: ComponentFixture<EditProfessionalDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfessionalDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfessionalDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
