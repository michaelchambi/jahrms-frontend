import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRetirementViewComponent } from './employee-retirement-view.component';

describe('EmployeeRetirementViewComponent', () => {
  let component: EmployeeRetirementViewComponent;
  let fixture: ComponentFixture<EmployeeRetirementViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRetirementViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRetirementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
