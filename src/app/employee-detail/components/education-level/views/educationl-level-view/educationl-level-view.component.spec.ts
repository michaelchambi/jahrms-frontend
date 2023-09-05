import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationlLevelViewComponent } from './educationl-level-view.component';

describe('EducationlLevelViewComponent', () => {
  let component: EducationlLevelViewComponent;
  let fixture: ComponentFixture<EducationlLevelViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationlLevelViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationlLevelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
