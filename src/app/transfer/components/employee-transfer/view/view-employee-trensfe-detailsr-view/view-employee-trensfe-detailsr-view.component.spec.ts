import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmployeeTrensfeDetailsrViewComponent } from './view-employee-trensfe-detailsr-view.component';

describe('ViewEmployeeTrensfeDetailsrViewComponent', () => {
  let component: ViewEmployeeTrensfeDetailsrViewComponent;
  let fixture: ComponentFixture<ViewEmployeeTrensfeDetailsrViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmployeeTrensfeDetailsrViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmployeeTrensfeDetailsrViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
