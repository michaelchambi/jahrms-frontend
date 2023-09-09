import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBankDetailsFormComponent } from './edit-bank-details-form.component';

describe('EditBankDetailsFormComponent', () => {
  let component: EditBankDetailsFormComponent;
  let fixture: ComponentFixture<EditBankDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBankDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBankDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
