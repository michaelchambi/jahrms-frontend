import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantsHomeViewComponent } from './applicants-home-view.component';

describe('ApplicantsHomeViewComponent', () => {
  let component: ApplicantsHomeViewComponent;
  let fixture: ComponentFixture<ApplicantsHomeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantsHomeViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantsHomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
