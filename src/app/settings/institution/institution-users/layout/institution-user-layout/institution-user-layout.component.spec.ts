import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionUserLayoutComponent } from './institution-user-layout.component';

describe('InstitutionUserLayoutComponent', () => {
  let component: InstitutionUserLayoutComponent;
  let fixture: ComponentFixture<InstitutionUserLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionUserLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
