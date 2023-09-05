import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDetailsViewComponent } from './bank-details-view.component';

describe('BankDetailsViewComponent', () => {
  let component: BankDetailsViewComponent;
  let fixture: ComponentFixture<BankDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
