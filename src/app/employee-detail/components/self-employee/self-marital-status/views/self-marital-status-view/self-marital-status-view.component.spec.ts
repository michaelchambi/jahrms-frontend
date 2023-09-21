import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfMaritalStatusViewComponent } from './self-marital-status-view.component';

describe('SelfMaritalStatusViewComponent', () => {
  let component: SelfMaritalStatusViewComponent;
  let fixture: ComponentFixture<SelfMaritalStatusViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfMaritalStatusViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfMaritalStatusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
