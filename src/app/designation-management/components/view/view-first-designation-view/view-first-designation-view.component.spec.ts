import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFirstDesignationViewComponent } from './view-first-designation-view.component';

describe('ViewFirstDesignationViewComponent', () => {
  let component: ViewFirstDesignationViewComponent;
  let fixture: ComponentFixture<ViewFirstDesignationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFirstDesignationViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFirstDesignationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
