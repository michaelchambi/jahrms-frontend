import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMainPostLayoutComponent } from './view-main-post-layout.component';

describe('ViewMainPostLayoutComponent', () => {
  let component: ViewMainPostLayoutComponent;
  let fixture: ComponentFixture<ViewMainPostLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMainPostLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMainPostLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
