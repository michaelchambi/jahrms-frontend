import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfficeDetailsFormComponent } from './add-office-details-form.component';

describe('AddOfficeDetailsFormComponent', () => {
  let component: AddOfficeDetailsFormComponent;
  let fixture: ComponentFixture<AddOfficeDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOfficeDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOfficeDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
