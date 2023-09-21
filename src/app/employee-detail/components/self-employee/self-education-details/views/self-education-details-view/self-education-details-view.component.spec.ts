import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEducationDetailsViewComponent } from './self-education-details-view.component';

describe('SelfEducationDetailsViewComponent', () => {
  let component: SelfEducationDetailsViewComponent;
  let fixture: ComponentFixture<SelfEducationDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfEducationDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfEducationDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
