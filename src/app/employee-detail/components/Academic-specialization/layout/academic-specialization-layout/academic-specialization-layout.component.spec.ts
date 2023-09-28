import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicSpecializationLayoutComponent } from './academic-specialization-layout.component';

describe('AcademicSpecializationLayoutComponent', () => {
  let component: AcademicSpecializationLayoutComponent;
  let fixture: ComponentFixture<AcademicSpecializationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicSpecializationLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicSpecializationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
