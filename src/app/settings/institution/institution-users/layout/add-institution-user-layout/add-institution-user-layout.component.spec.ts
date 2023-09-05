import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstitutionUserLayoutComponent } from './add-institution-user-layout.component';

describe('AddInstitutionUserLayoutComponent', () => {
  let component: AddInstitutionUserLayoutComponent;
  let fixture: ComponentFixture<AddInstitutionUserLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInstitutionUserLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInstitutionUserLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
