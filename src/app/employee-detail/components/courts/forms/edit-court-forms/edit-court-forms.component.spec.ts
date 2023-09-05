import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCourtFormsComponent } from './edit-court-forms.component';

describe('EditCourtFormsComponent', () => {
  let component: EditCourtFormsComponent;
  let fixture: ComponentFixture<EditCourtFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCourtFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCourtFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
