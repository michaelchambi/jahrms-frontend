import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDetailsRegistrationViewComponent } from './education-details-registration-view.component';

describe('EducationDetailsRegistrationViewComponent', () => {
  let component: EducationDetailsRegistrationViewComponent;
  let fixture: ComponentFixture<EducationDetailsRegistrationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationDetailsRegistrationViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationDetailsRegistrationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
