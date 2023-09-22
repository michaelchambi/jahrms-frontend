import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOutPostLayoutComponent } from './view-out-post-layout.component';

describe('ViewOutPostLayoutComponent', () => {
  let component: ViewOutPostLayoutComponent;
  let fixture: ComponentFixture<ViewOutPostLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOutPostLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOutPostLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
