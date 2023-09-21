import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritalStatusViewComponent } from './marital-status-view.component';

describe('MaritalStatusViewComponent', () => {
  let component: MaritalStatusViewComponent;
  let fixture: ComponentFixture<MaritalStatusViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaritalStatusViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaritalStatusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
