import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeRequestViewComponent } from './view-employee-request-view.component';

describe('ViewEmployeeRequestViewComponent', () => {
  let component: ViewEmployeeRequestViewComponent;
  let fixture: ComponentFixture<ViewEmployeeRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeRequestViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
