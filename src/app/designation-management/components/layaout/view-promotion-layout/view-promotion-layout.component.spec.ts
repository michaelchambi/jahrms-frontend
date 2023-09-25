import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPromotionLayoutComponent } from './view-promotion-layout.component';

describe('ViewPromotionLayoutComponent', () => {
  let component: ViewPromotionLayoutComponent;
  let fixture: ComponentFixture<ViewPromotionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPromotionLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPromotionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
