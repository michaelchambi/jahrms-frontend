import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionUserViewComponent } from './institution-user-view.component';

describe('InstitutionUserViewComponent', () => {
  let component: InstitutionUserViewComponent;
  let fixture: ComponentFixture<InstitutionUserViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionUserViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
