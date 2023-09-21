import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSelfBankDetailsFormComponent } from './edit-self-bank-details-form.component';

describe('EditSelfBankDetailsFormComponent', () => {
  let component: EditSelfBankDetailsFormComponent;
  let fixture: ComponentFixture<EditSelfBankDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSelfBankDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSelfBankDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
