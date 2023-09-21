import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSelfProfessionalDetailsFormComponent } from './add-self-professional-details-form.component';

describe('AddSelfProfessionalDetailsFormComponent', () => {
  let component: AddSelfProfessionalDetailsFormComponent;
  let fixture: ComponentFixture<AddSelfProfessionalDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSelfProfessionalDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSelfProfessionalDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
