import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransferReasonComponent } from './view-transfer-reason.component';

describe('ViewTransferReasonComponent', () => {
  let component: ViewTransferReasonComponent;
  let fixture: ComponentFixture<ViewTransferReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTransferReasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTransferReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
