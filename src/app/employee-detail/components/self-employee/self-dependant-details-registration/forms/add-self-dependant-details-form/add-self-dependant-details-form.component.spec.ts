import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSelfDependantDetailsFormComponent } from './add-self-dependant-details-form.component';

describe('AddSelfDependantDetailsFormComponent', () => {
  let component: AddSelfDependantDetailsFormComponent;
  let fixture: ComponentFixture<AddSelfDependantDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSelfDependantDetailsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSelfDependantDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
