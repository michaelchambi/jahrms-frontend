import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfBankDetailsViewComponent } from './self-bank-details-view.component';

describe('SelfBankDetailsViewComponent', () => {
  let component: SelfBankDetailsViewComponent;
  let fixture: ComponentFixture<SelfBankDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfBankDetailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfBankDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
