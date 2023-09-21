import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalDetailsRegistrationViewComponent } from './professional-details-registration-view.component';

describe('ProfessionalDetailsRegistrationViewComponent', () => {
  let component: ProfessionalDetailsRegistrationViewComponent;
  let fixture: ComponentFixture<ProfessionalDetailsRegistrationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalDetailsRegistrationViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalDetailsRegistrationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
