import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBankDetailsLayoutComponent } from './edit-bank-details-layout.component';

describe('EditBankDetailsLayoutComponent', () => {
  let component: EditBankDetailsLayoutComponent;
  let fixture: ComponentFixture<EditBankDetailsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBankDetailsLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBankDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
