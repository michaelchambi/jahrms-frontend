import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartmentLayoutComponent } from './add-department-layout.component';

describe('AddDepartmentLayoutComponent', () => {
  let component: AddDepartmentLayoutComponent;
  let fixture: ComponentFixture<AddDepartmentLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDepartmentLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDepartmentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
