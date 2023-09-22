import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPromotionViewComponent } from './view-promotion-view.component';

describe('ViewPromotionViewComponent', () => {
  let component: ViewPromotionViewComponent;
  let fixture: ComponentFixture<ViewPromotionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPromotionViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPromotionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
