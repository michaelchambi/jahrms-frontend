import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionUserDetailsViewComponent } from './institution-user-details-view.component';

describe('InstitutionUserDetailsViewComponent', () => {
  let component: InstitutionUserDetailsViewComponent;
  let fixture: ComponentFixture<InstitutionUserDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionUserDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionUserDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
