import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransferReasonLayoutComponent } from './add-transfer-reason-layout.component';

describe('AddTransferReasonLayoutComponent', () => {
  let component: AddTransferReasonLayoutComponent;
  let fixture: ComponentFixture<AddTransferReasonLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTransferReasonLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTransferReasonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
