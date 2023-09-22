import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransferReasonLayoutComponent } from './edit-transfer-reason-layout.component';

describe('EditTransferReasonLayoutComponent', () => {
  let component: EditTransferReasonLayoutComponent;
  let fixture: ComponentFixture<EditTransferReasonLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTransferReasonLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTransferReasonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
