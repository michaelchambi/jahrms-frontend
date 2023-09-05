import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDetailsViewComponent } from './education-details-view.component';

describe('EducationDetailsViewComponent', () => {
  let component: EducationDetailsViewComponent;
  let fixture: ComponentFixture<EducationDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
