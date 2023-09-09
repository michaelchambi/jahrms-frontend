import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDependantDetailsFormComponent } from './edit-dependant-details-form.component';

describe('EditDependantDetailsFormComponent', () => {
  let component: EditDependantDetailsFormComponent;
  let fixture: ComponentFixture<EditDependantDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDependantDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDependantDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
