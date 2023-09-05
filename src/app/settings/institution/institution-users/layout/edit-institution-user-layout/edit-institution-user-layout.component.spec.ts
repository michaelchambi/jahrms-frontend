import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstitutionUserLayoutComponent } from './edit-institution-user-layout.component';

describe('EditInstitutionUserLayoutComponent', () => {
  let component: EditInstitutionUserLayoutComponent;
  let fixture: ComponentFixture<EditInstitutionUserLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInstitutionUserLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInstitutionUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
