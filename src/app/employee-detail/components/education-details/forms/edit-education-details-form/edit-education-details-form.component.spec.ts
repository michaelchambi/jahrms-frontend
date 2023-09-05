import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducationDetailsFormComponent } from './edit-education-details-form.component';

describe('EditEducationDetailsFormComponent', () => {
  let component: EditEducationDetailsFormComponent;
  let fixture: ComponentFixture<EditEducationDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEducationDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEducationDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
