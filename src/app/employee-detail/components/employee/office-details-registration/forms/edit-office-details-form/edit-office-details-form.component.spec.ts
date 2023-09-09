import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOfficeDetailsFormComponent } from './edit-office-details-form.component';

describe('EditOfficeDetailsFormComponent', () => {
  let component: EditOfficeDetailsFormComponent;
  let fixture: ComponentFixture<EditOfficeDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOfficeDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOfficeDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
