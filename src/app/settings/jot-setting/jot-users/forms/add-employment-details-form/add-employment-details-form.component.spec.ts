import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmploymentDetailsFormComponent } from './add-employment-details-form.component';

describe('AddEmploymentDetailsFormComponent', () => {
  let component: AddEmploymentDetailsFormComponent;
  let fixture: ComponentFixture<AddEmploymentDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmploymentDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmploymentDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
