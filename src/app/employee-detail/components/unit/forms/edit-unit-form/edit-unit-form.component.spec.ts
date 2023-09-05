import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnitFormComponent } from './edit-unit-form.component';

describe('EditUnitFormComponent', () => {
  let component: EditUnitFormComponent;
  let fixture: ComponentFixture<EditUnitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUnitFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUnitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
