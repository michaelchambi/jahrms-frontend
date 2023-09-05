import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationlLevelLayoutComponent } from './educationl-level-layout.component';

describe('EducationlLevelLayoutComponent', () => {
  let component: EducationlLevelLayoutComponent;
  let fixture: ComponentFixture<EducationlLevelLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationlLevelLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationlLevelLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
