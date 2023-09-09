import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfessionalDetailsFormComponent } from './add-professional-details-form.component';

describe('AddProfessionalDetailsFormComponent', () => {
  let component: AddProfessionalDetailsFormComponent;
  let fixture: ComponentFixture<AddProfessionalDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProfessionalDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProfessionalDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
