import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecategorizationViewComponent } from './view-recategorization-view.component';

describe('ViewRecategorizationViewComponent', () => {
  let component: ViewRecategorizationViewComponent;
  let fixture: ComponentFixture<ViewRecategorizationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRecategorizationViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRecategorizationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
