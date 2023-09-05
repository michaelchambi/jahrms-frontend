import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepartmentLayoutComponent } from './edit-department-layout.component';

describe('EditDepartmentLayoutComponent', () => {
  let component: EditDepartmentLayoutComponent;
  let fixture: ComponentFixture<EditDepartmentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDepartmentLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDepartmentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
