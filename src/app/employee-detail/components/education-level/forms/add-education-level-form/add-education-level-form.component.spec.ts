import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducationLevelFormComponent } from './add-education-level-form.component';

describe('AddEducationLevelFormComponent', () => {
  let component: AddEducationLevelFormComponent;
  let fixture: ComponentFixture<AddEducationLevelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEducationLevelFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEducationLevelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
