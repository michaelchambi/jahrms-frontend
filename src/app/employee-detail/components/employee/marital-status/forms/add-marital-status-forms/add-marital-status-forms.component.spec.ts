import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaritalStatusFormsComponent } from './add-marital-status-forms.component';

describe('AddMaritalStatusFormsComponent', () => {
  let component: AddMaritalStatusFormsComponent;
  let fixture: ComponentFixture<AddMaritalStatusFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMaritalStatusFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMaritalStatusFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
