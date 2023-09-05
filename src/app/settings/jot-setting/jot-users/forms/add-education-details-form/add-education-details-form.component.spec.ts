import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducationDetailsFormComponent } from './add-education-details-form.component';

describe('AddEducationDetailsFormComponent', () => {
  let component: AddEducationDetailsFormComponent;
  let fixture: ComponentFixture<AddEducationDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEducationDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEducationDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
