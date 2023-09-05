import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourtFormsComponent } from './add-court-forms.component';

describe('AddCourtFormsComponent', () => {
  let component: AddCourtFormsComponent;
  let fixture: ComponentFixture<AddCourtFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCourtFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCourtFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
