import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransferReasonComponent } from './add-transfer-reason.component';

describe('AddTransferReasonComponent', () => {
  let component: AddTransferReasonComponent;
  let fixture: ComponentFixture<AddTransferReasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTransferReasonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTransferReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
