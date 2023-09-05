import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPeronalSkillsFormComponent } from './edit-peronal-skills-form.component';

describe('EditPeronalSkillsFormComponent', () => {
  let component: EditPeronalSkillsFormComponent;
  let fixture: ComponentFixture<EditPeronalSkillsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPeronalSkillsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPeronalSkillsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
