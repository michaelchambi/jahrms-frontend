import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDetailsLayoutComponent } from './bank-details-layout.component';

describe('BankDetailsLayoutComponent', () => {
  let component: BankDetailsLayoutComponent;
  let fixture: ComponentFixture<BankDetailsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankDetailsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
