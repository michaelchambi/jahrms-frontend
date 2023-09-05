import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDependantTypeFormComponent } from './edit-dependant-type-form.component';

describe('EditDependantTypeFormComponent', () => {
  let component: EditDependantTypeFormComponent;
  let fixture: ComponentFixture<EditDependantTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDependantTypeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDependantTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
