import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSelfEducationDetailsFormComponent } from './add-self-education-details-form.component';

describe('AddSelfEducationDetailsFormComponent', () => {
  let component: AddSelfEducationDetailsFormComponent;
  let fixture: ComponentFixture<AddSelfEducationDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSelfEducationDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSelfEducationDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
