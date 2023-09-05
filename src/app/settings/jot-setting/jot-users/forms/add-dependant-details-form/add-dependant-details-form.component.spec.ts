import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDependantDetailsFormComponent } from './add-dependant-details-form.component';

describe('AddDependantDetailsFormComponent', () => {
  let component: AddDependantDetailsFormComponent;
  let fixture: ComponentFixture<AddDependantDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDependantDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDependantDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
