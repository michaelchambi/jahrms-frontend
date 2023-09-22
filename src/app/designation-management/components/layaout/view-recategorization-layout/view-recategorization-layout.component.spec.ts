import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecategorizationLayoutComponent } from './view-recategorization-layout.component';

describe('ViewRecategorizationLayoutComponent', () => {
  let component: ViewRecategorizationLayoutComponent;
  let fixture: ComponentFixture<ViewRecategorizationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRecategorizationLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRecategorizationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
