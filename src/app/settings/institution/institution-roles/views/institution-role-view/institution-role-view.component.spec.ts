import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionRoleViewComponent } from './institution-role-view.component';

describe('InstitutionRoleViewComponent', () => {
  let component: InstitutionRoleViewComponent;
  let fixture: ComponentFixture<InstitutionRoleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionRoleViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionRoleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
