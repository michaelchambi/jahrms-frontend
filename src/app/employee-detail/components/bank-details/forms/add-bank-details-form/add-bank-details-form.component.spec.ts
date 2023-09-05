import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBankDetailsFormComponent } from './add-bank-details-form.component';

describe('AddBankDetailsFormComponent', () => {
  let component: AddBankDetailsFormComponent;
  let fixture: ComponentFixture<AddBankDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBankDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBankDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
