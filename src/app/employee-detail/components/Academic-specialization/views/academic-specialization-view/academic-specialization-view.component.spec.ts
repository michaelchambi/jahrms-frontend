import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicSpecializationViewComponent } from './academic-specialization-view.component';

describe('AcademicSpecializationViewComponent', () => {
  let component: AcademicSpecializationViewComponent;
  let fixture: ComponentFixture<AcademicSpecializationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicSpecializationViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicSpecializationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
