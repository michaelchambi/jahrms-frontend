import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEmploymentDetailsViewComponent } from './self-employment-details-view.component';

describe('SelfEmploymentDetailsViewComponent', () => {
  let component: SelfEmploymentDetailsViewComponent;
  let fixture: ComponentFixture<SelfEmploymentDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfEmploymentDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfEmploymentDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
