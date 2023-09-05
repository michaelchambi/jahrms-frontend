import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDependantTypeFormComponent } from './add-dependant-type-form.component';

describe('AddDependantTypeFormComponent', () => {
  let component: AddDependantTypeFormComponent;
  let fixture: ComponentFixture<AddDependantTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDependantTypeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDependantTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
