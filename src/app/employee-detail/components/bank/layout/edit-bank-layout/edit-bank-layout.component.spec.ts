import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBankLayoutComponent } from './edit-bank-layout.component';

describe('EditBankLayoutComponent', () => {
  let component: EditBankLayoutComponent;
  let fixture: ComponentFixture<EditBankLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBankLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBankLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
