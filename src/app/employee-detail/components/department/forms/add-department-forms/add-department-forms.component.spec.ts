import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartmentFormsComponent } from './add-department-forms.component';

describe('AddDepartmentFormsComponent', () => {
  let component: AddDepartmentFormsComponent;
  let fixture: ComponentFixture<AddDepartmentFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDepartmentFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDepartmentFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
