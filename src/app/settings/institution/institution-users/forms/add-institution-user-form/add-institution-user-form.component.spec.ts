import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstitutionUserFormComponent } from './add-institution-user-form.component';

describe('AddInstitutionUserFormComponent', () => {
  let component: AddInstitutionUserFormComponent;
  let fixture: ComponentFixture<AddInstitutionUserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInstitutionUserFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddInstitutionUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
