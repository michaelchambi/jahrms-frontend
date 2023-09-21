import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEmploymentAsignmentViewComponent } from './self-employment-asignment-view.component';

describe('SelfEmploymentAsignmentViewComponent', () => {
  let component: SelfEmploymentAsignmentViewComponent;
  let fixture: ComponentFixture<SelfEmploymentAsignmentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfEmploymentAsignmentViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfEmploymentAsignmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
