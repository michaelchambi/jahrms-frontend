import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMaritalStatusFormsComponent } from './edit-marital-status-forms.component';

describe('EditMaritalStatusFormsComponent', () => {
  let component: EditMaritalStatusFormsComponent;
  let fixture: ComponentFixture<EditMaritalStatusFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMaritalStatusFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMaritalStatusFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
