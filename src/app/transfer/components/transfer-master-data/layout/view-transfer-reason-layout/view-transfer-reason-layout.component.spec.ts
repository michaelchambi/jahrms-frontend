import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransferReasonLayoutComponent } from './view-transfer-reason-layout.component';

describe('ViewTransferReasonLayoutComponent', () => {
  let component: ViewTransferReasonLayoutComponent;
  let fixture: ComponentFixture<ViewTransferReasonLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTransferReasonLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTransferReasonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
