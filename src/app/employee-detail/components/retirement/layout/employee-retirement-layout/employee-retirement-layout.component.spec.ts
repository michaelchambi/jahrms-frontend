import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRetirementLayoutComponent } from './employee-retirement-layout.component';

describe('EmployeeRetirementLayoutComponent', () => {
  let component: EmployeeRetirementLayoutComponent;
  let fixture: ComponentFixture<EmployeeRetirementLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRetirementLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRetirementLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
