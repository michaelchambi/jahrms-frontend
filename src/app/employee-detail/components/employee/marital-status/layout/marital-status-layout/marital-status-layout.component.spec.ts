import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaritalStatusLayoutComponent } from './marital-status-layout.component';

describe('MaritalStatusLayoutComponent', () => {
  let component: MaritalStatusLayoutComponent;
  let fixture: ComponentFixture<MaritalStatusLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaritalStatusLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaritalStatusLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
