import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSelfProfessionalDetailsFormComponent } from './edit-self-professional-details-form.component';

describe('EditSelfProfessionalDetailsFormComponent', () => {
  let component: EditSelfProfessionalDetailsFormComponent;
  let fixture: ComponentFixture<EditSelfProfessionalDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSelfProfessionalDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSelfProfessionalDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
