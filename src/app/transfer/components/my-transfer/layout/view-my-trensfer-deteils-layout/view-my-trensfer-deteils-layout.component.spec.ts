import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyTrensferDeteilsLayoutComponent } from './view-my-trensfer-deteils-layout.component';

describe('ViewMyTrensferDeteilsLayoutComponent', () => {
  let component: ViewMyTrensferDeteilsLayoutComponent;
  let fixture: ComponentFixture<ViewMyTrensferDeteilsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyTrensferDeteilsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMyTrensferDeteilsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
