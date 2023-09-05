import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBankFormsComponent } from './edit-bank-forms.component';

describe('EditBankFormsComponent', () => {
  let component: EditBankFormsComponent;
  let fixture: ComponentFixture<EditBankFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBankFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBankFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
