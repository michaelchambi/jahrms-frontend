import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBankLayoutComponent } from './add-bank-layout.component';

describe('AddBankLayoutComponent', () => {
  let component: AddBankLayoutComponent;
  let fixture: ComponentFixture<AddBankLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBankLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBankLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
