import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTransferReasonComponent } from './edit-transfer-reason.component';

describe('EditTransferReasonComponent', () => {
  let component: EditTransferReasonComponent;
  let fixture: ComponentFixture<EditTransferReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTransferReasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTransferReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
