import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBankDetailsLayoutComponent } from './add-bank-details-layout.component';

describe('AddBankDetailsLayoutComponent', () => {
  let component: AddBankDetailsLayoutComponent;
  let fixture: ComponentFixture<AddBankDetailsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBankDetailsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBankDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
