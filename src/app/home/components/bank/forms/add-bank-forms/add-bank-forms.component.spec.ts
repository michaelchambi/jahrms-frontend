import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBankFormsComponent } from './add-bank-forms.component';

describe('AddBankFormsComponent', () => {
  let component: AddBankFormsComponent;
  let fixture: ComponentFixture<AddBankFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBankFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBankFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
