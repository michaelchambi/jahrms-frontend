import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDirectorateFormComponent } from './edit-directorate-form.component';

describe('EditDirectorateFormComponent', () => {
  let component: EditDirectorateFormComponent;
  let fixture: ComponentFixture<EditDirectorateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDirectorateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDirectorateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
