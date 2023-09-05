import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsHomeLayoutComponent } from './applicants-home-layout.component';

describe('ApplicantsHomeLayoutComponent', () => {
  let component: ApplicantsHomeLayoutComponent;
  let fixture: ComponentFixture<ApplicantsHomeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantsHomeLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantsHomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
