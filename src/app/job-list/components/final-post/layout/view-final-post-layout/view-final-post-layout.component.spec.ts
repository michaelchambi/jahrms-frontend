import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFinalPostLayoutComponent } from './view-final-post-layout.component';

describe('ViewFinalPostLayoutComponent', () => {
  let component: ViewFinalPostLayoutComponent;
  let fixture: ComponentFixture<ViewFinalPostLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFinalPostLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFinalPostLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
