import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepartmentFormsComponent } from './edit-department-forms.component';

describe('EditDepartmentFormsComponent', () => {
  let component: EditDepartmentFormsComponent;
  let fixture: ComponentFixture<EditDepartmentFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDepartmentFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDepartmentFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
