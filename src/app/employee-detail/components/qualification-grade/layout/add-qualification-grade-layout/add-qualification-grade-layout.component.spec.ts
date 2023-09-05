import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQualificationGradeLayoutComponent } from './add-qualification-grade-layout.component';

describe('AddQualificationGradeLayoutComponent', () => {
  let component: AddQualificationGradeLayoutComponent;
  let fixture: ComponentFixture<AddQualificationGradeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQualificationGradeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQualificationGradeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
