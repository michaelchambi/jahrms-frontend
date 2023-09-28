import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicInstitutionLayoutComponent } from './academic-institution-layout.component';

describe('AcademicInstitutionLayoutComponent', () => {
  let component: AcademicInstitutionLayoutComponent;
  let fixture: ComponentFixture<AcademicInstitutionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicInstitutionLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicInstitutionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
