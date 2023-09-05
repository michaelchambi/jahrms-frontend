import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQualificationFormComponent } from './edit-qualification-form.component';

describe('EditQualificationFormComponent', () => {
  let component: EditQualificationFormComponent;
  let fixture: ComponentFixture<EditQualificationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQualificationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditQualificationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
