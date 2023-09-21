import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSelfEducationDetailsFormComponent } from './edit-self-education-details-form.component';

describe('EditSelfEducationDetailsFormComponent', () => {
  let component: EditSelfEducationDetailsFormComponent;
  let fixture: ComponentFixture<EditSelfEducationDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSelfEducationDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSelfEducationDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
