import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBankFormComponent } from './edit-bank-form.component';

describe('EditBankFormComponent', () => {
  let component: EditBankFormComponent;
  let fixture: ComponentFixture<EditBankFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBankFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBankFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
