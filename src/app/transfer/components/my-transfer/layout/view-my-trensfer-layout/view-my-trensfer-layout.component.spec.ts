import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyTrensferLayoutComponent } from './view-my-trensfer-layout.component';

describe('ViewMyTrensferLayoutComponent', () => {
  let component: ViewMyTrensferLayoutComponent;
  let fixture: ComponentFixture<ViewMyTrensferLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyTrensferLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyTrensferLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
