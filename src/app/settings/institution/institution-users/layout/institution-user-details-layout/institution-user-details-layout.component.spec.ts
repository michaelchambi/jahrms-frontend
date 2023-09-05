import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionUserDetailsLayoutComponent } from './institution-user-details-layout.component';

describe('InstitutionUserDetailsLayoutComponent', () => {
  let component: InstitutionUserDetailsLayoutComponent;
  let fixture: ComponentFixture<InstitutionUserDetailsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionUserDetailsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionUserDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
