import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducationLevelFormComponent } from './edit-education-level-form.component';

describe('EditEducationLevelFormComponent', () => {
  let component: EditEducationLevelFormComponent;
  let fixture: ComponentFixture<EditEducationLevelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEducationLevelFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEducationLevelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
