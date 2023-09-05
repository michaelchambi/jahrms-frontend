import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetSessionLayoutComponent } from './reset-session-layout.component';

describe('ResetSessionLayoutComponent', () => {
  let component: ResetSessionLayoutComponent;
  let fixture: ComponentFixture<ResetSessionLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetSessionLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetSessionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
