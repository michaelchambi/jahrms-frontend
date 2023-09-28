import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicInstitutionViewComponent } from './academic-institution-view.component';

describe('AcademicInstitutionViewComponent', () => {
  let component: AcademicInstitutionViewComponent;
  let fixture: ComponentFixture<AcademicInstitutionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicInstitutionViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicInstitutionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
