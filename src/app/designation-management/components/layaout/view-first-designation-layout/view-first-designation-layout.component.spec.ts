import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFirstDesignationLayoutComponent } from './view-first-designation-layout.component';

describe('ViewFirstDesignationLayoutComponent', () => {
  let component: ViewFirstDesignationLayoutComponent;
  let fixture: ComponentFixture<ViewFirstDesignationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFirstDesignationLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFirstDesignationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
