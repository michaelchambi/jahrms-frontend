import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfProfessionalDetailsViewComponent } from './self-professional-details-view.component';

describe('SelfProfessionalDetailsViewComponent', () => {
  let component: SelfProfessionalDetailsViewComponent;
  let fixture: ComponentFixture<SelfProfessionalDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfProfessionalDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfProfessionalDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
