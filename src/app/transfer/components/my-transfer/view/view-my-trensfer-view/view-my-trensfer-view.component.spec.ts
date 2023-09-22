import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyTrensferViewComponent } from './view-my-trensfer-view.component';

describe('ViewMyTrensferViewComponent', () => {
  let component: ViewMyTrensferViewComponent;
  let fixture: ComponentFixture<ViewMyTrensferViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyTrensferViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyTrensferViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
