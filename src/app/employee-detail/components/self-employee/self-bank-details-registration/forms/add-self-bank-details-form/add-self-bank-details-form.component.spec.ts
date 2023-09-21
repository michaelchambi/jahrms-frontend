import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSelfBankDetailsFormComponent } from './add-self-bank-details-form.component';

describe('AddSelfBankDetailsFormComponent', () => {
  let component: AddSelfBankDetailsFormComponent;
  let fixture: ComponentFixture<AddSelfBankDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSelfBankDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSelfBankDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
