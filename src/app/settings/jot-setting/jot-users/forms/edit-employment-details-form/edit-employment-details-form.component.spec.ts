import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmploymentDetailsFormComponent } from './edit-employment-details-form.component';

describe('EditEmploymentDetailsFormComponent', () => {
  let component: EditEmploymentDetailsFormComponent;
  let fixture: ComponentFixture<EditEmploymentDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmploymentDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmploymentDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
